import { useCallback, useEffect, useMemo, useRef } from "react";

type Props = {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  maxOpacity?: number;
  className?: string;
};

export function FlickeringGrid({
  squareSize = 6,
  gridGap = 12,
  flickerChance = 0.22,
  color = "#d9d3be",
  maxOpacity = 0.4,
  className,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInViewRef = useRef(false);

  const parseColor = useCallback((value: string) => {
    const normalized = value.trim();
    if (normalized.startsWith("#")) {
      const hex = normalized.slice(1);
      const expand = (input: string) => input.split("").map((char) => `${char}${char}`).join("");
      const full = hex.length === 3 ? expand(hex) : hex;
      const r = Number.parseInt(full.slice(0, 2), 16);
      const g = Number.parseInt(full.slice(2, 4), 16);
      const b = Number.parseInt(full.slice(4, 6), 16);
      return [r, g, b] as const;
    }

    const rgbMatch = normalized.match(/\d+/g);
    if (rgbMatch && rgbMatch.length >= 3) {
      return [Number(rgbMatch[0]), Number(rgbMatch[1]), Number(rgbMatch[2])] as const;
    }

    return [217, 211, 190] as const;
  }, []);

  const rgbaColor = useMemo(() => {
    const [r, g, b] = parseColor(color);
    return `rgba(${r}, ${g}, ${b},`;
  }, [color, parseColor]);

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const cols = Math.ceil(width / (squareSize + gridGap));
      const rows = Math.ceil(height / (squareSize + gridGap));
      const cells = new Float32Array(cols * rows);

      for (let index = 0; index < cells.length; index += 1) {
        cells[index] = Math.random() * maxOpacity;
      }

      return { cols, rows, cells, dpr };
    },
    [gridGap, maxOpacity, squareSize],
  );

  const updateCells = useCallback(
    (cells: Float32Array, deltaTime: number) => {
      for (let index = 0; index < cells.length; index += 1) {
        if (Math.random() < flickerChance * deltaTime) {
          cells[index] = Math.random() * maxOpacity;
        }
      }
    },
    [flickerChance, maxOpacity],
  );

  const drawGrid = useCallback(
    (
      context: CanvasRenderingContext2D,
      canvasWidth: number,
      canvasHeight: number,
      cols: number,
      rows: number,
      cells: Float32Array,
      dpr: number,
    ) => {
      context.clearRect(0, 0, canvasWidth, canvasHeight);

      for (let col = 0; col < cols; col += 1) {
        for (let row = 0; row < rows; row += 1) {
          const opacity = cells[col * rows + row];
          context.fillStyle = `${rgbaColor}${opacity})`;
          context.fillRect(
            col * (squareSize + gridGap) * dpr,
            row * (squareSize + gridGap) * dpr,
            squareSize * dpr,
            squareSize * dpr,
          );
        }
      }
    },
    [gridGap, rgbaColor, squareSize],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const context = canvas?.getContext("2d") ?? null;
    let animationFrameId = 0;
    let resizeObserver: ResizeObserver | null = null;
    let intersectionObserver: IntersectionObserver | null = null;
    let grid: ReturnType<typeof setupCanvas> | null = null;

    if (!canvas || !container || !context) return;

    const updateCanvasSize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      grid = setupCanvas(canvas, width, height);
    };

    updateCanvasSize();

    let lastTime = 0;
    let lastFrameTime = 0;
    const animate = (time: number) => {
      if (!grid || !isInViewRef.current) return;
      if (time - lastFrameTime < 1000 / 18) {
        animationFrameId = window.requestAnimationFrame(animate);
        return;
      }
      lastFrameTime = time;
      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;
      updateCells(grid.cells, deltaTime);
      drawGrid(context, canvas.width, canvas.height, grid.cols, grid.rows, grid.cells, grid.dpr);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    resizeObserver = new ResizeObserver(updateCanvasSize);
    resizeObserver.observe(container);

    intersectionObserver = new IntersectionObserver(([entry]) => {
      isInViewRef.current = entry.isIntersecting;
      if (entry.isIntersecting) {
        lastTime = performance.now();
        lastFrameTime = 0;
        animationFrameId = window.requestAnimationFrame(animate);
      } else if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
    });
    intersectionObserver.observe(container);

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
    };
  }, [drawGrid, setupCanvas, updateCells]);

  return (
    <div className={className} ref={containerRef}>
      <canvas className="flickeringGridCanvas" ref={canvasRef} />
    </div>
  );
}
