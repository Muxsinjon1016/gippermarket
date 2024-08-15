import React from "react";
import useCategoryProducts from "../../services/useCategoryProducts";
import { FaCartShopping } from "react-icons/fa6";
import { ProductSkeleton } from "../../../../components/ui/skeletonProducts";
import { useNavigate } from "react-router-dom";

export const RenderCategoryProducts = () => {
  const { data, isLoading } = useCategoryProducts();
  const navigate = useNavigate();

  const toDetails = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div className="flex container mt-[150px] justify-between">
      <div className="flex-1 max-w-[1000px] scrollbar-custom h-[calc(100vh-120px)] overflow-y-auto pr-4">
        <h3 className="text-2xl font-semibold">Смартфоны и планшеты</h3>
        <div className="flex flex-wrap justify-between">
          {isLoading ? (
            <ProductSkeleton />
          ) : (
            data?.map((item) => (
              <div
                onClick={() => toDetails(item.id)}
                key={item.id}
                className="w-[214px] border-2 product transition-all overflow-hidden cursor-grab duration-300 text-center mb-[48px] relative h-[332px] rounded-12 hover:shadow-xl py-2 px-4"
              >
                <img
                  className="w-[165px] transition-all duration-300 productImg h-[165px] mb-3"
                  src={item.img}
                  alt={item.title}
                />
                <h4>{item.title}</h4>
                <div className="absolute z-20 flex items-center gap-[11px] bottom-5 left-5">
                  <p className="font-semibold">{item.price} Сум</p>
                  <button className="p-2 bg-gipermart">
                    <FaCartShopping />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="max-w-[328px] py-4 px-10 scrollbar-custom h-[calc(100vh-120px)] overflow-y-auto pl-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
        accusantium expedita velit, natus rem doloremque sit cum necessitatibus
        reprehenderit cumque modi provident, ullam facere voluptatibus excepturi
        sint pariatur voluptatum laboriosam non temporibus at. Nam consequatur
        dicta praesentium ad eos molestias temporibus modi perferendis, in culpa
        ea blanditiis, possimus reprehenderit officiis voluptatibus nihil
        tenetur voluptatem deserunt molestiae dignissimos ducimus enim, nobis
        eum? Ad doloribus neque natus tempore numquam id similique libero dolore
        eius minus saepe nemo facilis quam, soluta recusandae esse alias
        veritatis obcaecati officia eum rerum tenetur consequatur consectetur
        autem. Animi maiores enim fuga incidunt magni, reprehenderit at! Nihil
        ut ea incidunt suscipit quos consectetur omnis optio debitis sed facere
        molestias exercitationem doloremque facilis nobis blanditiis adipisci
        asperiores similique, repudiandae ipsam, minima molestiae quo. Magnam id
        corporis pariatur cupiditate sed, consequuntur architecto quis incidunt
        laudantium maxime perspiciatis, mollitia ab nisi iure quas. Repellendus
        perferendis asperiores sequi consequuntur quis nihil est obcaecati quia
        neque minima, dicta accusamus ut. Beatae eum nostrum consequuntur quos
        illo sed, illum ducimus tenetur numquam repellendus aut rem in quo ipsum
        quae facere maxime earum ullam perferendis debitis sapiente fugit enim!
        Recusandae pariatur molestiae aperiam soluta ullam enim omnis neque eius
        ipsa quas velit, dolor at, nihil quidem obcaecati modi minus odio
        doloremque assumenda. Error, illum? Quod, commodi! Eligendi obcaecati
        tenetur est sit! Magnam repudiandae corrupti rerum quam dicta possimus
        nam consequatur laboriosam est? Aliquam iusto quaerat itaque unde
        voluptatibus quasi, eius sapiente, repudiandae consequuntur earum
        molestias culpa velit sint praesentium assumenda? Itaque asperiores ea
        doloremque corrupti fuga neque error iure veritatis consectetur,
        distinctio repellendus blanditiis quaerat, repudiandae commodi esse
        doloribus laboriosam! Quo minima accusantium nulla vel consectetur illo.
        Alias reprehenderit ipsa quo fugiat, eaque atque. Excepturi unde sint
        impedit amet assumenda, molestiae id provident earum blanditiis dolores.
        Non voluptatum suscipit repellat maxime? Incidunt aspernatur sint eum
        placeat quas facere sequi eaque impedit consequuntur asperiores natus
        voluptatem officiis nihil delectus voluptates corporis architecto fugiat
        vel, voluptas saepe in omnis quae quidem consequatur? Eaque quos dicta
        enim ipsa? Deserunt ratione distinctio explicabo harum eveniet. Et
        reprehenderit doloremque eaque corporis? Neque rem consequatur
        inventore, totam officiis exercitationem reiciendis doloribus at
        eligendi perferendis non ratione facilis, quos nihil ex? Consectetur
        neque inventore omnis amet soluta quia voluptate sit quae error nam,
        minima similique autem deleniti, corrupti commodi. Aperiam ipsam
        voluptatem voluptate, alias exercitationem tenetur quidem. Nemo ea totam
        cupiditate? Odio, qui at nam facilis porro, totam officiis quisquam
        accusamus, ea voluptate eaque voluptas laudantium eius natus possimus
        autem! Nostrum autem ea laborum in accusantium sequi quidem explicabo
        illo recusandae rem obcaecati, debitis maiores. Quae animi magnam velit
        soluta maiores deserunt beatae ipsam porro voluptatibus ullam,
        asperiores nostrum odio, in consequatur quisquam consectetur molestiae
        ab, consequuntur cumque. Quaerat laborum consequatur labore, porro vel
        ducimus qui, eum vitae eius non, culpa aspernatur officiis eaque.
        Quisquam deserunt vel molestiae reprehenderit minima dolor eos dolore ut
        necessitatibus reiciendis sunt maiores pariatur error odio accusantium
        non possimus iusto, earum ex, nemo aperiam aspernatur. Explicabo est,
        inventore necessitatibus rerum modi voluptatem ullam laudantium earum
        sint ea et nihil impedit hic sequi temporibus nisi quaerat numquam
        officiis dolor velit aliquam assumenda totam illum consequuntur. Dolore,
        exercitationem quasi? Impedit, dolorem sequi. Sunt, laborum veniam dicta
        dolorum hic reprehenderit cupiditate porro eos debitis accusantium nemo
        quod libero laudantium culpa. Voluptatum officia blanditiis sed maiores
        natus nesciunt minus accusamus aspernatur, consequatur expedita nobis,
        deserunt asperiores minima suscipit vitae est sequi sunt facere
        voluptate veritatis! Non corrupti aliquam numquam quia labore commodi
        amet rerum totam sed perferendis, ducimus facilis minus tempore debitis
        facere ex soluta quos ab ullam culpa modi? Labore tempora quo illum
        reprehenderit quos quis maxime pariatur! Similique, iure consequuntur.
        Dolore facilis omnis obcaecati esse aspernatur reprehenderit.
        Reprehenderit corporis neque accusantium quae quisquam doloribus ab
        reiciendis praesentium ipsum, sapiente modi laudantium adipisci et
        tempora qui exercitationem, esse officia aut odit. Temporibus deleniti,
        ea dignissimos nihil vel est rem repellendus iste ab eum ducimus,
        nostrum quibusdam vero sequi dolor veritatis? Fugit culpa repellat
        similique architecto impedit iste, a molestias hic consequuntur
        voluptates est. Nostrum, quod rerum iure earum commodi optio
        perspiciatis voluptate, veniam, cumque sequi nemo nam dignissimos
        similique? Exercitationem quia minus magnam accusantium molestias
        dolores, soluta saepe suscipit vel, totam, tempore placeat non veritatis
        excepturi voluptas ex quos cupiditate minima expedita ratione! Enim
        illum libero sapiente eligendi, placeat quisquam id in quam distinctio
        recusandae repudiandae, numquam sequi mollitia animi eaque amet maiores
        eius officia dicta adipisci deserunt quasi. Vitae molestias quos
        voluptatum a reprehenderit nihil rem laudantium veniam quas perspiciatis
        eos at aliquid fugit temporibus, adipisci rerum laborum veritatis
        deserunt delectus quasi soluta officiis doloremque. Necessitatibus
        molestiae est, dolore rem laboriosam id quas ex rerum, soluta magnam
        corrupti neque non officiis voluptas quae mollitia earum? Quos
        voluptates dicta laborum sapiente. Libero facilis eaque similique harum
        placeat officiis repellendus nam debitis molestiae omnis. Possimus unde
        labore quibusdam cumque aliquid pariatur, dolor blanditiis ab nulla.
        Quia accusamus, ab eveniet delectus eum magni? Beatae quas amet tempore
        laudantium nemo atque excepturi nobis ad et fugiat corrupti, sint
        ducimus? Fugit placeat iure magni exercitationem possimus saepe aliquam
        vel tenetur voluptas nihil excepturi rerum, perspiciatis aliquid
        blanditiis atque velit obcaecati molestiae? Nam nisi perspiciatis
        debitis, unde doloribus rerum voluptatem expedita, praesentium molestias
        adipisci commodi earum. Voluptate sint sed nesciunt necessitatibus odio
        ex facilis est animi ipsam, labore, aperiam quibusdam vero, accusantium
        enim. Alias nulla ducimus incidunt sit minima optio ad eum tempora quam
        molestias inventore ipsam vero cupiditate, reprehenderit nostrum
        doloremque, expedita culpa modi accusantium aliquid. Sapiente in
        provident sunt iure. Asperiores libero alias, deleniti molestias at,
        iusto necessitatibus consequatur, neque voluptatum suscipit incidunt
        doloribus deserunt nam dolorem quasi architecto sequi facere non
        molestiae! Perferendis, tenetur ullam? Debitis provident facilis minima
        fugiat aliquid numquam. Veniam, repellat delectus libero rem
        voluptatibus dolorum modi quidem numquam laboriosam? Inventore nulla ex
        eveniet tempora id vero ad voluptatum nemo saepe facere praesentium
        provident delectus aliquid, dolorem laudantium totam itaque illo
        molestiae, incidunt accusamus. Incidunt delectus debitis expedita sequi
        illo voluptatum odit molestiae illum id nemo nam quaerat nihil qui
        explicabo quisquam cum ratione, eum atque soluta. Recusandae, error.
      </div>
    </div>
  );
};

export default RenderCategoryProducts;
