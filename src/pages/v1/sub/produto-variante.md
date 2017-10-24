# Produtos variantes
## Adicionando um produto variável
Os <strong>produtos variáveis</strong> ​​são um tipo de produto no Ecommerce que permite oferecer um conjunto de variações em um produto, com controle de preços, estoque, imagem e mais para cada variação. Eles podem ser usados ​​para um produto como uma camisa, onde você pode oferecer uma grande, média e pequena e em cores diferentes.

### Etapa 1. Defina o tipo de produto

Para adicionar um produto variável, crie um novo produto ou edite um existente.

1. Vá para:  <strong>Produtos.</strong></li>
2. Selecione o botão Adicionar produto ou Edite um produto existente. Os dados do produto são exibidos.</li>
3. Selecione o produto Variável no menu suspenso Dados do produto.</li>
4. Selecionando produto variável</li>

<img src="http://docs.woocommerce.com/wp-content/uploads/2013/05/Selecting-variable-product-WooCommerce.png">

#### Etapa 2. Adicionar atributos para uso para variações</h4>
Na seção Atributos, adicione atributos antes de criar variações - use atributos globais que sejam abrangentes no local ou defina customizados específicos de um produto.

**Atributos globais**

Para usar um atributo global:

1. Selecione um do menu suspenso e Adicionar.
2. Escolha Selecionar tudo para adicionar todos os atributos ao produto variável (se aplicável).
3. Marque a caixa de seleção Usado para variações para informar ao Ecommerce que é para suas variações.

<img src="http://docs.woocommerce.com/wp-content/uploads/2013/05/Adding-Global-Attribute-to-Product-WooCommerce.png">

*Adicionando Atributo Global ao Produto Ecommerce*

<img src="http://docs.woocommerce.com/wp-content/uploads/2013/05/Setting-Up-Global-Attributes.png">

*Adicionando atributos globais a um produto, Configurando atributos globais*


#### Atributos personalizados específicos para o produto

Se adicionar novos atributos específicos para este produto:

1. Selecione o atributo de produto personalizado e Adicionar.

<img src="http://docs.woocommerce.com/wp-content/uploads/2013/05/Adding-Custom-Attributes-to-WooCommerce.png">

*Adicionando atributos personalizados ao Ecommmerce*

2. Nomeie o atributo (por exemplo, Tamanho),
3. Defina valores separados por um tubo vertical (por exemplo, pequeno | médio | grande)
4. Ative a caixa de seleção Usado para variações.

<img src="http://docs.woocommerce.com/wp-content/uploads/2013/05/Setting-Up-Custom-Attributes-for-Variations.png">

*Configurando atributos personalizados para variações*

5. Clique em Salvar atributos.

### Passo 3. Adicionar variações

Para adicionar uma variação, vá para a seção Variações na caixa meta Dados do produto.

#### Adicionando manualmente uma variação

1. Selecione Adicionar variação no menu suspenso e clique em Ir

<img src="http://docs.woocommerce.com/wp-content/uploads/2013/05/add-variation.png">

*Adicionar variação*

2. Selecione atributos para sua variação. Para alterar dados adicionais, clique no ícone do triângulo para expandir a variação.

<img src="http://docs.woocommerce.com/wp-content/uploads/2013/05/any-color-any-size.png">

*Qualquer cor Qualquer tamanho*

3. Edite todos os dados disponíveis. O único campo obrigatório é o preço normal.
4. Salvar alterações.

#### Editando muitas variações

Se você tem mais de 10 variações, use os botões para navegar para a frente e para trás através da lista. Cada vez que você navega para um novo conjunto de variações, o conjunto anterior é salvo. Isso garante que todos os dados sejam salvos.

<img src="http://docs.woocommerce.com/wp-content/uploads/2013/05/variations-pagination.png">

*Pagação de Variações*

#### Definir Padrões

Recomendamos definir padrões que prefira nas variações. No exemplo, não temos configurações padrão, para que os usuários possam escolher qualquer cor e tamanho imediatamente da página do produto.

<img src="http://docs.woocommerce.com/wp-content/uploads/2013/05/settings-defaults.png">

*Padrões de Configuração*

Se você quer uma certa variação já selecionada quando um usuário visita a página do produto, você pode configurá-los. Isso também permite que o botão Adicionar ao carrinho apareça automaticamente em páginas de produtos variáveis.

Você só pode definir padrões após ter criado, pelo menos, uma variação.

#### Dados de Variação

Cada variação pode ser atribuída.

**Geral:**

- Ativado - Ative ou desative a variação.
- Downloadable - Se esta é uma variação para download.
- Virtual - Se este produto não for físico ou enviado, as configurações de envio são removidas.
- Preço regular (obrigatório) - Defina o preço para esta variação.
- Preço de venda (opcional) - Defina um preço para esta variação quando estiver à venda.
- Estatuto fiscal - Imposto, envio apenas, nenhum.
- Classe de imposto - Classe de impostos para esta variação. Útil, se você estiver oferecendo variações abrangendo bandas de impostos diferentes.
- Arquivos transferíveis - Mostra se Downloadable está selecionado. Adicione arquivos (s) para clientes a serem baixados.
- Limite de download - Mostra se Downloadable está selecionado. Defina quantas vezes um cliente pode baixar o (s) arquivo (s). Deixe em branco por ilimitado.
- Download Expiração - Mostra se Downloadable estiver selecionado. Defina o número de dias antes de um download expirar após a compra.

**Inventário:**

- SKU - Se você usa SKUs, defina o SKU ou deixe em branco para usar o SKU do produto.
- Gerenciar estoque? - Gerencie o estoque no nível de variação.
Quantidade de estoque - mostra se Manage Stock é selecionado. Insira a quantidade. Estoque para a variação específica, ou deixada em branco para usar as configurações de estoque do produto.
- Permitir Troncos - Escolha como gerenciar backorders.
- Status do estoque - Defina o status do estoque da sua variação.
- Vendido individualmente? - Permita que apenas um seja vendido em um pedido.

O Set Stock Status pode ser aplicado a todas as variações de uma só vez em estoque ou fora de stock. Bulk-update em Variações.

<img src="https://docs.woocommerce.com/wp-content/uploads/2013/05/setstockstatus-variations.png">


**Frete**

- Peso - Peso para a variação, ou deixado em branco para usar o peso do produto.
- Dimensões - Altura, largura e comprimento para a variação, ou deixada em branco para usar as dimensões do produto.
- Classe de transporte - A classe de transporte pode afetar o envio. Defina isso se difere do produto.

**Produtos vinculados**

- Upsells
- Cross-sells
- Agrupado

Se o SKU, o peso, as dimensões e os campos de estoque não estiverem configurados, ele herda o valor

#### Adicione uma imagem para a variação

1. Expanda a variação.
2. Clique no espaço reservado da imagem azul (captura de tela).
4. Selecione a imagem que deseja usar.
5. Salve.

<img src="https://docs.woocommerce.com/wp-content/uploads/2013/05/Screen-Shot-on-2015-09-02-at-14-57-29.png">
