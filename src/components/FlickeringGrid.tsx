import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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
  const [isInView, setIsInView] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const rgbaColor = useMemo(() => {
    if (typeof window === "undefined") return "rgba(217, 211, 190,";
    const sample = document.createElement("canvas");
    sample.width = 1;
    sample.height = 1;
    const context = sample.getContext("2d");
    if (!context) return "rgba(217, 211, 190,";
    context.fillStyle = color;
    context.fillRect(0, 0, 1, 1);
    const [r, g, b] = context.getImageData(0, 0, 1, 1).data;
    return `rgba(${r}, ${g}, ${b},`;
  }, [color]);

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
      setSize({ width, height });
      grid = setupCanvas(canvas, width, height);
    };

    updateCanvasSize();

    let lastTime = 0;
    const animate = (time: number) => {
      if (!grid || !isInView) return;
      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;
      updateCells(grid.cells, deltaTime);
      drawGrid(context, canvas.width, canvas.height, grid.cols, grid.rows, grid.cells, grid.dpr);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    resizeObserver = new ResizeObserver(updateCanvasSize);
    resizeObserver.observe(container);

    intersectionObserver = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    });
    intersectionObserver.observe(container);

    if (isInView) {
      animationFrameId = window.requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
    };
  }, [drawGrid, isInView, setupCanvas, updateCells]);

  return (
    <div className={className} ref={containerRef}>
      <canvas
        className="flickeringGridCanvas"
        ref={canvasRef}
        style={{ width: size.width, height: size.height }}
      />
    </div>
  );
}
