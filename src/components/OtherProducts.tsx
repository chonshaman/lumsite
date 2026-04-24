import type { SiteContent } from "../content";

type Props = {
  data: SiteContent["otherProducts"];
};

export function OtherProducts({ data }: Props) {
  return (
    <section className="otherProducts" id="other-products" aria-labelledby="other-products-title">
      <div className="otherProductsInner">
        <header className="otherProductsHeader reveal">
          <h2 id="other-products-title">{data.title}</h2>
          <p>{data.body}</p>
        </header>

        <div className="otherProductsGrid">
          {data.items.map((item, index) => (
            <article className={`productCard productCard${index + 1} reveal`} key={item.title}>
              <div className="productCardCopy">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <div className="productCardMedia">
                <img src={item.image} alt="" loading="lazy" decoding="async" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
