import HotDogs from "./Dogs"
import Lanches from "./lanches"

const Classes = () => (
    <div>
        <div className="conteudo_L" id="conteudol">
            <Lanches/>
        </div>
        <div>
            <div className="conteudo_H" id="conteudoH">
               <HotDogs/>
            </div>
        </div>

        <div className='cards_pai' id="cards_pai">
        <button >
            <div className='card' id="lanches">
                <div>
                    <img src="https://blog.letskuk.com.br/wp-content/uploads/2022/10/lanches-gourmet.jpg" alt="" />
                </div>
                <div  className='texto'>
                    <h1>Lanches</h1>
                    <p>Nossa seleção de lanches vai além de um simples lanche. É um convite a uma experiência gastronômica que eleva o ordinário ao extraordinário. Cada mordida é uma explosão de sabores e texturas, cuidadosamente crafted para despertar seus sentidos.</p>
                </div>
            </div>
            </button>
            <button>
            <div className='card'>
                <div>
                    <img src="https://img.freepik.com/fotos-gratis/cachorro-quente-de-carne-grelhada-com-lanche-de-ketchup-ia-generativa_188544-7829.jpg?size=626&ext=jpg" alt="" />
                </div>
                <div>
                    <h1>Hot dogs</h1>
                    <p>Nossos hot dogs transcendem o comum, elevando o clássico a um nível de pura extravagância. Cada mordida é uma viagem a um mundo de texturas e aromas, onde a salsicha se torna a estrela de um show de delícias.</p>
                </div>
            </div>
            </button>
            <div className='card'>
                <div>
                    <img src="https://guiadacozinha.com.br/wp-content/uploads/2023/03/tamanho-padrao-gc-15-768x619.jpg" alt="" />
                </div>
                <div>
                    <h1>Caldos</h1>
                    <p>Nossos caldos são como um concerto de aromas e sabores, que te transportam para um lugar de aconchego e conforto. Cada colherada é uma melodia de ingredientes frescos e cuidadosamente selecionados, que nutrem e revigoram.</p>
                </div>
            </div>
            <div className='card'>
                <div>
                    <img src="https://s5.static.brasilescola.uol.com.br/be/2023/03/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.jpg" alt="" />
                </div>
                <div>
                    <h1>Pizzas</h1>
                    <p>Nossas pizzas são como uma orquestra de sabores e aromas, que te convidam a uma experiência gastronômica inesquecível. Cada fatia é uma explosão de texturas e ingredientes frescos, cuidadosamente selecionados para garantir uma sinfonia de delícias.</p>
                </div>
            </div>
            <div className='card'>
                <div>
                    <img src="https://www.abf.com.br/wp-content/uploads/2023/02/700x400.png" alt="" />
                </div>
                <div>
                    <h1>Açai</h1>
                    <p>Nosso açaí é como uma sinfonia de sabores e aromas, que te convida a uma experiência gastronômica nutritiva e deliciosa. Cada mordida é uma explosão de energia e frescor, com a combinação perfeita de frutas, grãos e outros ingredientes selecionados.</p>
                </div>
            </div>
            <div className='card'>
                <div>
                    <img src="https://www.museudagula.com.br/media/upload/ckeditor/2020/02/10/txt-quais-tipos-de-bebidas-que-combinadas-dao-certo.jpg" alt="" />
                </div>
                <div>
                    <h1>Bebidas</h1>
                    <p>Nossas bebidas são como uma sinfonia de aromas e sabores, que complementam sua refeição e te convidam a uma experiência gastronômica completa. Cada gole é uma viagem a um universo de sensações, onde a hidratação se junta ao prazer.</p>
                </div>
            </div>
        </div>
    </div>
)

export default Classes