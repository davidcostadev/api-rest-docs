<template>
  <div class="page page-produtos">

    <div class="hero">
      <h1>Apis do App do avaliador</h1>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <aside>
            <affix class="sidebar-menu" relative-element-selector="#content" :offset="{ top: 90, bottom: 40 }" :scroll-affix="false">
              <scrollactive class="list-group" active-class="active" :offset="70" ref="scroll" v-on:itemchanged="yourFunction">
                <template v-for="(item, index) in menu">
                  <a :href="`#${item.path}`"  :key="index"class="list-group-item scrollactive-item" :title="item.title">{{item.title}}</a>
                  <div v-if="item.children.length"  :key="index" class="list-group-item">
                    <div class="list-group">
                      <a
                        v-for="(item2, index2) in item.children"
                        :key="index2"
                        :href="`#${item2.path}`"
                        class="list-group-item scrollactive-item"
                        :title="item2.title">{{item2.title}}</a>
                    </div>
                  </div>
                </template>
              </scrollactive>
            </affix>
          </aside>
        </div>
        <div class="col-md-8">

          <div id="content">
            <section class="docs-section" id="api-users-login">
              <h1>/api/users/login</h1>

              <div class="docs-sub-section" id="api-users-login-post">
                <h2>POST /api/users/login</h2>

                <h4>params</h4>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>email</td>
                      <td>string <strong>Obrigatório</strong></td>
                    </tr>
                    <tr>
                      <td>password</td>
                      <td>string <strong>Obrigatório</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4>request</h4>
                <pre v-highlightjs><code class="bash">curl -XPOST -d 'email=avaliador@nacional.com.br&password=123456' 'http://localhost/carro-minuto-admin/api/users/login'</code></pre>

                <h4>response</h4>
                <pre v-highlightjs><code class="json">{
  "return":true,
  "user":{
    "id":53,
    "inspection_points_id":19,
    "name":"Portage Avaliador",
    "email":"avaliador@portage.com.br",
    "gestor":true,
    "surveyor":true,
    "created":"10-10-2017 10:06:23",
    "modified":null,
    "company":{
      "id":19,
      "name":"Unidade Norte Shopping",
      "consorcio_updated":false,
      "vendas_diretas_updated":false,
      "key_code":"e172c08dce3896a18bc036531ce8a2e0",
      "keep_cache":false,
      "cache_key":null,
      "phone":"(##)####-####",
      "street":null,
      "neighborhood":null,
      "city":null,
      "zip_code":null,
      "plan":null,
      "active":true,
      "ofertas_updated":false,
      "novos_updated":false,
      "seminovos_updated":false,
      "access_token":null,
      "created":"2016-12-29T13:36:54-0300",
      "modified":"2016-12-29T13:36:54-0300"
    }
  }
}</code></pre>

                <h4>response params</h4>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>return</td>
                      <td>bool</td>
                      <td>false|true</td>
                    </tr>
                    <tr>
                      <td>user</td>
                      <td>object</td>
                      <td><i>Apenas se return for true</i></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section class="docs-section" id="api-cars-get-list-car-avaliation">
              <h1>/api/cars/get-list-car-avaliation</h1>

              <div class="docs-sub-section" id="api-cars-get-list-car-avaliation-post">
                <h2>POST /api/cars/get-list-car-avaliation</h2>

                <h4>params</h4>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>user_id</td>
                      <td>int</td>
                      <td><strong>Obrigatório</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4>request</h4>
                <pre v-highlightjs><code class="bash">curl -XPOST -d 'user_id=34' 'http://localhost/carro-minuto-admin/api/cars/get-list-car-avaliation'</code></pre>

                <h4>response</h4>
                <pre v-highlightjs><code class="json">{
  "return":true,
  "cars":[
    {
      "id":91,
      "name":"Celta",
      "image":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/showcase_imgs\/frente_c5f7c59c558d7eb2d0bcb7d6796229bb.jpg",
      "created":1504026483
    }
  ]
}</code></pre>

                <h4>response params</h4>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>return</td>
                      <td>bool false|true</td>
                    </tr>
                    <tr>
                      <td>cars</td>
                      <td>array</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>


            <section class="docs-section" id="api-types-images-car-get-type-imgs">
              <h1>/api/types-images-car/get-type-imgs/{car_id}</h1>

              <div class="docs-sub-section" id="api-types-images-car-get-type-imgs-post">
                <h2>POST /api/types-images-car/get-type-imgs/{car_id}</h2>

                <h4>url</h4>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>car_id</td>
                      <td>int</td>
                      <td><strong>Obrigatório</strong></td>
                    </tr>
                  </tbody>
                </table>


                <h4>params</h4>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>user_id</td>
                      <td>int</td>
                      <td><strong>Obrigatório</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4>request</h4>
                <pre v-highlightjs><code class="bash">curl -XPOST -d 'user_id=34' 'http://localhost/carro-minuto-admin/api/types-images-car/get-type-imgs/91'</code></pre>

                <h4>response</h4>
                <pre v-highlightjs><code class="json">{
  "return":true,
  "cars":[
    {
      "id":91,
      "name":"Celta",
      "image":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/showcase_imgs\/frente_c5f7c59c558d7eb2d0bcb7d6796229bb.jpg",
      "created":1504026483
    }
  ]
}</code></pre>

                <h4>response params</h4>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>return</td>
                      <td>bool false|true</td>
                    </tr>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>


            <section class="docs-section" id="api-inspection-items-get-full-list">
              <h1>api/inspection-items/get-full-list/</h1>

              <div class="docs-sub-section" id="api-inspection-items-get-full-list-post">
                <h2>POST api/inspection-items/get-full-list/</h2>

                <h4>params</h4>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>user_id</td>
                      <td>int</td>
                      <td><strong>Obrigatório</strong></td>
                    </tr>
                    <tr>
                      <td>car_id</td>
                      <td>int</td>
                      <td><strong>Obrigatório</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4>request</h4>
                <pre v-highlightjs><code class="bash">curl -XPOST -d 'user_id=34&car_id=91' 'http://localhost/carro-minuto-admin/api/inspection-items/get-full-list'</code></pre>

                <h4>response</h4>
                <pre v-highlightjs><code class="json">{
  "return":true,
  "list_full_itens":[
    {
      "id":1,
      "value":"Interior do Ve\u00edculo",
      "inspection_items":[
        {
          "id":11,
          "inspection_groups_id":1,
          "value":"Bancada Frente",
          "type":"evaluation",
          "require_img":true,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":5,
          "images":{
            "366":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/f5cc7fdcf09d688a78d68d76dee4ebe6.jpg"
          }
        },
        {
          "id":12,
          "inspection_groups_id":1,
          "value":"Bancada Tr\u00e1s",
          "type":"evaluation",
          "require_img":true,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":5,
          "images":{
            "367":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/70235d85b4226551eac8af623f7e9ac2.jpg"
          }
        },
        {
          "id":27,
          "inspection_groups_id":1,
          "value":"Laternas Internas",
          "type":"evaluation",
          "require_img":false,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":5,
          "images":null
        },
        {
          "id":30,
          "inspection_groups_id":1,
          "value":"Buzina",
          "type":"evaluation",
          "require_img":false,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":null
        },
        {
          "id":31,
          "inspection_groups_id":1,
          "value":"Volante",
          "type":"evaluation",
          "require_img":false,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":3,
          "images":null
        },
        {
          "id":35,
          "inspection_groups_id":1,
          "value":"Painel de Instrumentos",
          "type":"evaluation",
          "require_img":true,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":5,
          "images":{
            "368":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/476bdcc377220b844a371951c35d1a0e.jpg"
          }
        }
      ],
      "avaliation_ans":{
        "requireds":6,
        "answered":6
      },
      "avaliation_imgs":{
        "requireds":3,
        "answered":3
      }
    },
    {
      "id":2,
      "value":"Frente do Ve\u00edculo",
      "inspection_items":[
        {
          "id":2,
          "inspection_groups_id":2,
          "value":"Amortecedor Dianteiro",
          "type":"evaluation",
          "require_img":false,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":3,
          "images":null
        },
        {
          "id":5,
          "inspection_groups_id":2,
          "value":"Setas Dianteiras",
          "type":"evaluation",
          "require_img":false,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":5,
          "images":null
        },
        {
          "id":6,
          "inspection_groups_id":2,
          "value":"Far\u00f3is Dianteiros",
          "type":"evaluation",
          "require_img":true,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":{
            "369":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/2c9cbb5cdb1d2d4ac6d91bef49f61c6f.jpg",
            "370":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/c9ce8141ddec0e84cc76eddb6791ecbc.jpg"
          }
        },
        {
          "id":8,
          "inspection_groups_id":2,
          "value":"Para-choque Dianteiro",
          "type":"evaluation",
          "require_img":true,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":{
            "371":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/015228da64f3c8f4caec93a0e9ef7403.jpg",
            "372":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/67b880da993cda9d78ffc6d749f6f353.jpg"
          }
        },
        {
          "id":10,
          "inspection_groups_id":2,
          "value":"Pneus Dianteiros",
          "type":"evaluation",
          "require_img":true,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":2,
          "images":{
            "373":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/84bbfdf516072dc8205fc37d038c125d.jpg"
          }
        },
        {
          "id":13,
          "inspection_groups_id":2,
          "value":"Disco de freio",
          "type":"evaluation",
          "require_img":false,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":null
        },
        {
          "id":14,
          "inspection_groups_id":2,
          "value":"Pastilhas de Freio",
          "type":"evaluation",
          "require_img":false,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":null
        },
        {
          "id":22,
          "inspection_groups_id":2,
          "value":"Funcionamento do Motor",
          "type":"evaluation",
          "require_img":true,
          "required":true,
          "active":true,
          "inspection_items_details":[
            {
              "id":3,
              "inspection_items_id":22,
              "question":"Apresenta vazamento",
              "required":true,
              "active":true,
              "answers":false
            },
            {
              "id":4,
              "inspection_items_id":22,
              "question":"Ranjido Estranho",
              "required":true,
              "active":true,
              "answers":false
            }
          ],
          "state":4,
          "images":{
            "374":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/e339d6f15627609680dea5b287834e7a.jpg"
          }
        },
        {
          "id":23,
          "inspection_groups_id":2,
          "value":"Funcionamento da Embreagem",
          "type":"evaluation",
          "require_img":false,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":null
        },
        {
          "id":24,
          "inspection_groups_id":2,
          "value":"Funcionamento dos Freios",
          "type":"evaluation",
          "require_img":false,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":null
        },
        {
          "id":25,
          "inspection_groups_id":2,
          "value":"Funcionamento do Escapamento",
          "type":"evaluation",
          "require_img":false,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":3,
          "images":null
        },
        {
          "id":26,
          "inspection_groups_id":2,
          "value":"Funcionamento da Bateria",
          "type":"evaluation",
          "require_img":false,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":5,
          "images":null
        },
        {
          "id":28,
          "inspection_groups_id":2,
          "value":"Vidros Frontais",
          "type":"evaluation",
          "require_img":false,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":null
        }
      ],
      "avaliation_ans":{
        "requireds":15,
        "answered":15
      },
      "avaliation_imgs":{
        "requireds":4,
        "answered":4
      }
    },
    {
      "id":3,
      "value":"Traseira Veiculo",
      "inspection_items":[
        {
          "id":4,
          "inspection_groups_id":3,
          "value":"Pneus Traseiros",
          "type":"evaluation",
          "require_img":true,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":{
            "375":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/d441408402b33ce91be01d08f558bc04.jpg"
          }
        },
        {
          "id":7,
          "inspection_groups_id":3,
          "value":"Far\u00f3is Traseiros",
          "type":"evaluation",
          "require_img":true,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":{
            "376":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/a6f6b04c80310ada7e2a1a5d229dcf09.jpg",
            "377":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/3d2f6254aaec414fc46751bd332d4a32.jpg"
          }
        },
        {
          "id":9,
          "inspection_groups_id":3,
          "value":"Para-choque Traseiro",
          "type":"evaluation",
          "require_img":true,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":{
            "378":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/04823e580785dcb46876753dba71e033.jpg"
          }
        },
        {
          "id":20,
          "inspection_groups_id":3,
          "value":"Setas Traseiras",
          "type":"evaluation",
          "require_img":false,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":null
        },
        {
          "id":21,
          "inspection_groups_id":3,
          "value":"Amortecedor Traseiro",
          "type":"evaluation",
          "require_img":false,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":null
        },
        {
          "id":29,
          "inspection_groups_id":3,
          "value":"Vidros Traseiros",
          "type":"evaluation",
          "require_img":false,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":null
        },
        {
          "id":32,
          "inspection_groups_id":3,
          "value":"Macaco, Tri\u00e2ngulo e Chaves",
          "type":"evaluation",
          "require_img":false,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":null
        },
        {
          "id":33,
          "inspection_groups_id":3,
          "value":"Estepe",
          "type":"evaluation",
          "require_img":false,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":2,
          "images":null
        }
      ],
      "avaliation_ans":{
        "requireds":8,
        "answered":8
      },
      "avaliation_imgs":{
        "requireds":3,
        "answered":3
      }
    },
    {
      "id":4,
      "value":"Lateral Esquerda",
      "inspection_items":[
        {
          "id":36,
          "inspection_groups_id":4,
          "value":"Portas Dianteiras",
          "type":"evaluation",
          "require_img":true,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":{
            "379":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/c1a9479190bbc2f7c074208cb89f1e79.jpg"
          }
        },
        {
          "id":37,
          "inspection_groups_id":4,
          "value":"Portas Traseiras",
          "type":"evaluation",
          "require_img":false,
          "required":false,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":null
        },
        {
          "id":40,
          "inspection_groups_id":4,
          "value":"Longarina Esquerda",
          "type":"evaluation",
          "require_img":true,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":5,
          "images":{
            "380":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/9bfa7379bf96707c554d6e1f9410cd0f.jpg"
          }
        },
        {
          "id":41,
          "inspection_groups_id":4,
          "value":"Paralama Esquerdo",
          "type":"evaluation",
          "require_img":true,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":{
            "381":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/b9b984f59292687c1c6b36b6a1701d71.jpg",
            "382":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/f566c571ef00ff6d88b4900179ee14f3.jpg"
          }
        }
      ],
      "avaliation_ans":{
        "requireds":3,
        "answered":3
      },
      "avaliation_imgs":{
        "requireds":3,
        "answered":3
      }
    },
    {
      "id":5,
      "value":"Lateral Direita",
      "inspection_items":[
        {
          "id":38,
          "inspection_groups_id":5,
          "value":"Portas Dianteiras.",
          "type":"evaluation",
          "require_img":true,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":{
            "383":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/60eb96a4a7ff473b43b9a9825ef32c0e.jpg"
          }
        },
        {
          "id":39,
          "inspection_groups_id":5,
          "value":"Portas Traseiras.",
          "type":"evaluation",
          "require_img":false,
          "required":false,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":null
        },
        {
          "id":42,
          "inspection_groups_id":5,
          "value":"Paralama Direito",
          "type":"evaluation",
          "require_img":true,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":4,
          "images":{
            "384":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/cb5def841b5c056d82dc429c718f49db.jpg",
            "385":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/dfcbe3d19fa6b9834bacd322a749a5d9.jpg"
          }
        },
        {
          "id":43,
          "inspection_groups_id":5,
          "value":"Longarina Direita",
          "type":"evaluation",
          "require_img":true,
          "required":true,
          "active":true,
          "inspection_items_details":[

          ],
          "state":5,
          "images":{
            "386":"http:\/\/localhost\/carro-minuto-admin\/upload\/2017\/08\/29\/91\/survey\/bb22a77ca88cb45000af85b02f9f0802.jpg"
          }
        }
      ],
      "avaliation_ans":{
        "requireds":3,
        "answered":3
      },
      "avaliation_imgs":{
        "requireds":3,
        "answered":3
      }
    }
  ]
}</code></pre>

                <h4>response params</h4>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>return</td>
                      <td>bool false|true</td>
                    </tr>
                    <tr>
                      <td>list_full_itens</td>
                      <td>array</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section class="docs-section" id="api-cars-get-description">
              <h1>/api/cars/get-description/{car_id}</h1>

              <div class="docs-sub-section" id="api-cars-get-description-get">
                <h2>GET /api/cars/get-description/{car_id}</h2>

                <h4>url</h4>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>car_id</td>
                      <td>int</td>
                      <td><strong>Obrigatório</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4>request</h4>
                <pre v-highlightjs><code class="bash">curl -XGET 'http://localhost/carro-minuto-admin/api/cars/get-description/91'</code></pre>

                <h4>response</h4>
                <pre v-highlightjs><code class="json">{
  "return":true,
  "car_id":"91",
  "description":"Completo 4 portas. Paralamas mexidos. Trocar 2 pneus. Inje\u00e7\u00e3o acesa. N\u00e3o tem servi\u00e7o de pintura para fazer."
}</code></pre>

                <h4>response params</h4>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>return</td>
                      <td>bool false|true</td>
                    </tr>
                    <tr>
                      <td>car_id</td>
                      <td>integer</td>
                    </tr>
                    <tr>
                      <td>description</td>
                      <td>string</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section class="docs-section" id="api-cars-set-description">
             <h1>/api/cars/set-description/{car_id}</h1>

              <div class="docs-sub-section" id="api-cars-set-description-post">
                <h2>POST /api/cars/set-description/{car_id}</h2>

                <h4>url</h4>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>car_id</td>
                      <td>int</td>
                      <td><strong>Obrigatório</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4>params</h4>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>description</td>
                      <td>string</td>
                      <td><strong>Obrigatório</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4>request</h4>
                <pre v-highlightjs><code class="bash">curl -XPOST -d 'description=Completo+4+portas.+Paralamas+mexidos.+Trocar+2+pneus.+Inje%C3%A7%C3%A3o+acesa.+N%C3%A3o+tem+servi%C3%A7o+de+pintura+para+fazer.' 'http://localhost/carro-minuto-admin/api/cars/set-description/91'</code></pre>

                <h4>response</h4>
                <pre v-highlightjs><code class="json">{
  "return":true,
  "car_id":"91",
  "description":"Completo 4 portas. Paralamas mexidos. Trocar 2 pneus. Inje\u00e7\u00e3o acesa. N\u00e3o tem servi\u00e7o de pintura para fazer."
}</code></pre>

                <h4>response params</h4>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>return</td>
                      <td>bool false|true</td>
                    </tr>
                    <tr>
                      <td>car_id</td>
                      <td>integer</td>
                    </tr>
                    <tr>
                      <td>description</td>
                      <td>string</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section class="docs-section" id="api-optionals-car">
             <h1>/api/optionals/car/{car_id}</h1>

              <div class="docs-sub-section" id="api-optionals-car-get">
                <h2>GET /api/optionals/car/{car_id}</h2>

                <h4>url</h4>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>car_id</td>
                      <td>int</td>
                      <td><strong>Obrigatório</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4>request</h4>
                <pre v-highlightjs><code class="bash">curl -XGET 'http://localhost/carro-minuto-admin/api/optionals/car/91'</code></pre>

                <h4>response</h4>
                <pre v-highlightjs><code class="json">{
  "return":true,
  "optionals":[
    {
      "id":1,
      "icon":"icon-ice-crystal",
      "name":"Ar condicionado",
      "has":true
    },
    {
      "id":2,
      "icon":"icon-ion-ios-circle-outline",
      "name":"4x4",
      "has":false
    },
    {
      "id":3,
      "icon":null,
      "name":"Dire\u00e7\u00e3o Hidr\u00e1ulica",
      "has":true
    },
    {
      "id":4,
      "icon":"icon-car-door",
      "name":"Vidros El\u00e9tricos",
      "has":false
    },
    {
      "id":5,
      "icon":"icon-ion-ios-bolt-outline",
      "name":"Travas El\u00e9tricas",
      "has":true
    },
    {
      "id":6,
      "icon":"icon-airbag",
      "name":"Air Bag",
      "has":false
    },
    {
      "id":7,
      "icon":"icon-ion-ios-pause-outline",
      "name":"Freios ABS",
      "has":false
    },
    {
      "id":8,
      "icon":"icon-cambio",
      "name":"C\u00e2mbio Autom\u00e1tico",
      "has":false
    },
    {
      "id":10,
      "icon":"icon-ion-ios-bell-outline",
      "name":"Alarme",
      "has":false
    },
    {
      "id":11,
      "icon":"icon-child-seat-for-the-car",
      "name":"Bancos de Couro",
      "has":false
    },
    {
      "id":12,
      "icon":null,
      "name":"Retrovisores El\u00e9tricos",
      "has":false
    },
    {
      "id":13,
      "icon":null,
      "name":"Rodas de Liga Leve",
      "has":false
    },
    {
      "id":14,
      "icon":"icon-steering-wheel",
      "name":"Volante com Regulagem de Altura",
      "has":false
    },
    {
      "id":15,
      "icon":null,
      "name":"Desemba\u00e7ador Traseiro",
      "has":true
    },
    {
      "id":16,
      "icon":"icon-child-seat-for-the-car",
      "name":"Banco do motorista com ajuste de altura",
      "has":false
    },
    {
      "id":18,
      "icon":"icon-ion-ios-sunny-outline",
      "name":"Farol de neblina",
      "has":false
    },
    {
      "id":19,
      "icon":null,
      "name":"Retrovisor fotocr\u00f4mico",
      "has":false
    },
    {
      "id":20,
      "icon":null,
      "name":"Encosto de cabe\u00e7a traseiro",
      "has":true
    },
    {
      "id":21,
      "icon":null,
      "name":"Porta-Copos",
      "has":false
    },
    {
      "id":22,
      "icon":null,
      "name":"Protetor de ca\u00e7amba",
      "has":false
    },
    {
      "id":23,
      "icon":null,
      "name":"Capota Mar\u00edtima",
      "has":false
    },
    {
      "id":24,
      "icon":"icon-cambio",
      "name":"Controle de Tra\u00e7\u00e3o",
      "has":false
    },
    {
      "id":25,
      "icon":"icon-ion-ios-navigate-outline",
      "name":"Gps",
      "has":false
    },
    {
      "id":26,
      "icon":"icon-car-door",
      "name":"Vidros Dianteiros El\u00e9tricos",
      "has":true
    },
    {
      "id":27,
      "icon":"icon-airbag",
      "name":"Air Bag Duplo",
      "has":false
    },
    {
      "id":28,
      "icon":null,
      "name":"plus",
      "has":false
    },
    {
      "id":29,
      "icon":null,
      "name":"R\u00e1dio",
      "has":false
    },
    {
      "id":30,
      "icon":null,
      "name":"Dire\u00e7\u00e3o El\u00e9trica",
      "has":false
    },
    {
      "id":31,
      "icon":null,
      "name":"Auto Falantes",
      "has":false
    },
    {
      "id":32,
      "icon":null,
      "name":"Computador de Bordo",
      "has":false
    },
    {
      "id":33,
      "icon":null,
      "name":"Park Pilot",
      "has":false
    },
    {
      "id":34,
      "icon":null,
      "name":"Start-Stop",
      "has":false
    },
    {
      "id":35,
      "icon":null,
      "name":"Teto Solar",
      "has":false
    },
    {
      "id":36,
      "icon":null,
      "name":"Bluetooth",
      "has":false
    },
    {
      "id":37,
      "icon":null,
      "name":"Sit & Adjust",
      "has":false
    },
    {
      "id":38,
      "icon":null,
      "name":"One Shape",
      "has":false
    },
    {
      "id":39,
      "icon":"icon-ion-ios-thunderstorm-outline",
      "name":"Aerowischer",
      "has":false
    },
    {
      "id":40,
      "icon":null,
      "name":"EBD - Distribui\u00e7\u00e3o Eletr\u00f4nica de Frenagem",
      "has":false
    },
    {
      "id":41,
      "icon":null,
      "name":"ESS - Alerta de Frenagem de Emerg\u00eancia",
      "has":false
    },
    {
      "id":42,
      "icon":null,
      "name":"Travamento El\u00e9trico das Portas",
      "has":true
    },
    {
      "id":49,
      "icon":null,
      "name":"Revis\u00f5es Realizadas",
      "has":false
    },
    {
      "id":50,
      "icon":"icon-ion-ios-telephone-outline",
      "name":"Garantia de f\u00e1brica",
      "has":false
    },
    {
      "id":51,
      "icon":null,
      "name":"Blindado",
      "has":false
    },
    {
      "id":52,
      "icon":"icon-ion-ios-body-outline",
      "name":"Adaptado p\/ Deficientes",
      "has":false
    },
    {
      "id":53,
      "icon":null,
      "name":"CD Player",
      "has":false
    },
    {
      "id":54,
      "icon":"icon-ion-ios-sunny-outline",
      "name":"Ar Quente",
      "has":true
    },
    {
      "id":55,
      "icon":"icon-child-seat-for-the-car",
      "name":"Bancos c\/ Aquecimento",
      "has":false
    },
    {
      "id":56,
      "icon":null,
      "name":"MP3 Player",
      "has":false
    },
    {
      "id":57,
      "icon":null,
      "name":"Controle de Velocidade",
      "has":false
    },
    {
      "id":58,
      "icon":"icon-compact-disc",
      "name":"DVD Player",
      "has":false
    },
    {
      "id":59,
      "icon":null,
      "name":"Disqueteira",
      "has":false
    },
    {
      "id":60,
      "icon":"icon-ion-ios-sunny-outline",
      "name":"Farol de Xen\u00f4nio",
      "has":false
    },
    {
      "id":61,
      "icon":null,
      "name":"Limpador Traseiro",
      "has":true
    },
    {
      "id":62,
      "icon":null,
      "name":"R\u00e1dio c\/ Fita",
      "has":false
    },
    {
      "id":63,
      "icon":null,
      "name":"Sensor de Chuva",
      "has":false
    },
    {
      "id":64,
      "icon":null,
      "name":"Sensor de Estacionamento",
      "has":false
    },
    {
      "id":65,
      "icon":null,
      "name":"Piloto Autom\u00e1tico",
      "has":false
    },
    {
      "id":66,
      "icon":null,
      "name":"Blue & Me",
      "has":false
    },
    {
      "id":67,
      "icon":"icon-steering-wheel",
      "name":"Volante com comando de som",
      "has":false
    },
    {
      "id":68,
      "icon":"icon-ion-ios-paperplane-outline",
      "name":"Aerof\u00f3lio",
      "has":false
    },
    {
      "id":69,
      "icon":"icon-compact-disc",
      "name":"Kit Multim\u00eddia (GPS e\/ou DVD)",
      "has":false
    },
    {
      "id":70,
      "icon":"icon-airbag",
      "name":"Airbag Lateral",
      "has":false
    },
    {
      "id":71,
      "icon":"icon-airbag",
      "name":"Airbag Motorista",
      "has":false
    },
    {
      "id":72,
      "icon":"icon-airbag",
      "name":"Airbag Passageiro",
      "has":false
    },
    {
      "id":73,
      "icon":"icon-ion-ios-bolt-outline",
      "name":"Ajuste El\u00e9trico",
      "has":false
    },
    {
      "id":74,
      "icon":null,
      "name":"Calotas",
      "has":false
    },
    {
      "id":75,
      "icon":null,
      "name":"Entrada USB",
      "has":false
    },
    {
      "id":76,
      "icon":null,
      "name":"Kit G\u00e1s",
      "has":false
    },
    {
      "id":77,
      "icon":null,
      "name":"Sensor de Farol",
      "has":false
    },
    {
      "id":78,
      "icon":null,
      "name":"Toca-fitas",
      "has":false
    },
    {
      "id":79,
      "icon":null,
      "name":"Trio Eletrico",
      "has":false
    },
    {
      "id":80,
      "icon":"icon-car-door",
      "name":"Vidros El\u00e9tricos Traseiros",
      "has":false
    },
    {
      "id":83,
      "icon":null,
      "name":"Break Light",
      "has":false
    },
    {
      "id":84,
      "icon":null,
      "name":"Predisposi\u00e7\u00e3o para R\u00e1dio",
      "has":false
    }
  ]
}</code></pre>

                <h4>response params</h4>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>return</td>
                      <td>bool false|true</td>
                    </tr>
                    <tr>
                      <td>optionals</td>
                      <td>array</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="docs-sub-section" id="api-optionals-car-post">
                <h2>POST /api/optionals/car/{car_id}</h2>

                <h4>url</h4>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>car_id</td>
                      <td>int</td>
                      <td><strong>Obrigatório</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4>params</h4>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>optional_id</td>
                      <td>int</td>
                      <td><strong>Obrigatório</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4>request</h4>
                <pre v-highlightjs><code class="bash">curl -XPOST -d 'optional_id=71' 'http://localhost/carro-minuto-admin/api/optionals/car/91'</code></pre>

                <h4>response</h4>
                <pre v-highlightjs><code class="json">{
  "return":true,
  "optionals":[
    {
      "id":1,
      "icon":"icon-ice-crystal",
      "name":"Ar condicionado",
      "has":true
    },
    {
      "id":2,
      "icon":"icon-ion-ios-circle-outline",
      "name":"4x4",
      "has":false
    },
    {
      "id":3,
      "icon":null,
      "name":"Dire\u00e7\u00e3o Hidr\u00e1ulica",
      "has":true
    },
    {
      "id":4,
      "icon":"icon-car-door",
      "name":"Vidros El\u00e9tricos",
      "has":false
    },
    {
      "id":5,
      "icon":"icon-ion-ios-bolt-outline",
      "name":"Travas El\u00e9tricas",
      "has":true
    },
    {
      "id":6,
      "icon":"icon-airbag",
      "name":"Air Bag",
      "has":false
    },
    {
      "id":7,
      "icon":"icon-ion-ios-pause-outline",
      "name":"Freios ABS",
      "has":false
    },
    {
      "id":8,
      "icon":"icon-cambio",
      "name":"C\u00e2mbio Autom\u00e1tico",
      "has":false
    },
    {
      "id":10,
      "icon":"icon-ion-ios-bell-outline",
      "name":"Alarme",
      "has":false
    },
    {
      "id":11,
      "icon":"icon-child-seat-for-the-car",
      "name":"Bancos de Couro",
      "has":false
    },
    {
      "id":12,
      "icon":null,
      "name":"Retrovisores El\u00e9tricos",
      "has":false
    },
    {
      "id":13,
      "icon":null,
      "name":"Rodas de Liga Leve",
      "has":false
    },
    {
      "id":14,
      "icon":"icon-steering-wheel",
      "name":"Volante com Regulagem de Altura",
      "has":false
    },
    {
      "id":15,
      "icon":null,
      "name":"Desemba\u00e7ador Traseiro",
      "has":true
    },
    {
      "id":16,
      "icon":"icon-child-seat-for-the-car",
      "name":"Banco do motorista com ajuste de altura",
      "has":false
    },
    {
      "id":18,
      "icon":"icon-ion-ios-sunny-outline",
      "name":"Farol de neblina",
      "has":false
    },
    {
      "id":19,
      "icon":null,
      "name":"Retrovisor fotocr\u00f4mico",
      "has":false
    },
    {
      "id":20,
      "icon":null,
      "name":"Encosto de cabe\u00e7a traseiro",
      "has":true
    },
    {
      "id":21,
      "icon":null,
      "name":"Porta-Copos",
      "has":false
    },
    {
      "id":22,
      "icon":null,
      "name":"Protetor de ca\u00e7amba",
      "has":false
    },
    {
      "id":23,
      "icon":null,
      "name":"Capota Mar\u00edtima",
      "has":false
    },
    {
      "id":24,
      "icon":"icon-cambio",
      "name":"Controle de Tra\u00e7\u00e3o",
      "has":false
    },
    {
      "id":25,
      "icon":"icon-ion-ios-navigate-outline",
      "name":"Gps",
      "has":false
    },
    {
      "id":26,
      "icon":"icon-car-door",
      "name":"Vidros Dianteiros El\u00e9tricos",
      "has":true
    },
    {
      "id":27,
      "icon":"icon-airbag",
      "name":"Air Bag Duplo",
      "has":false
    },
    {
      "id":28,
      "icon":null,
      "name":"plus",
      "has":false
    },
    {
      "id":29,
      "icon":null,
      "name":"R\u00e1dio",
      "has":false
    },
    {
      "id":30,
      "icon":null,
      "name":"Dire\u00e7\u00e3o El\u00e9trica",
      "has":false
    },
    {
      "id":31,
      "icon":null,
      "name":"Auto Falantes",
      "has":false
    },
    {
      "id":32,
      "icon":null,
      "name":"Computador de Bordo",
      "has":false
    },
    {
      "id":33,
      "icon":null,
      "name":"Park Pilot",
      "has":false
    },
    {
      "id":34,
      "icon":null,
      "name":"Start-Stop",
      "has":false
    },
    {
      "id":35,
      "icon":null,
      "name":"Teto Solar",
      "has":false
    },
    {
      "id":36,
      "icon":null,
      "name":"Bluetooth",
      "has":false
    },
    {
      "id":37,
      "icon":null,
      "name":"Sit & Adjust",
      "has":false
    },
    {
      "id":38,
      "icon":null,
      "name":"One Shape",
      "has":false
    },
    {
      "id":39,
      "icon":"icon-ion-ios-thunderstorm-outline",
      "name":"Aerowischer",
      "has":false
    },
    {
      "id":40,
      "icon":null,
      "name":"EBD - Distribui\u00e7\u00e3o Eletr\u00f4nica de Frenagem",
      "has":false
    },
    {
      "id":41,
      "icon":null,
      "name":"ESS - Alerta de Frenagem de Emerg\u00eancia",
      "has":false
    },
    {
      "id":42,
      "icon":null,
      "name":"Travamento El\u00e9trico das Portas",
      "has":true
    },
    {
      "id":49,
      "icon":null,
      "name":"Revis\u00f5es Realizadas",
      "has":false
    },
    {
      "id":50,
      "icon":"icon-ion-ios-telephone-outline",
      "name":"Garantia de f\u00e1brica",
      "has":false
    },
    {
      "id":51,
      "icon":null,
      "name":"Blindado",
      "has":false
    },
    {
      "id":52,
      "icon":"icon-ion-ios-body-outline",
      "name":"Adaptado p\/ Deficientes",
      "has":false
    },
    {
      "id":53,
      "icon":null,
      "name":"CD Player",
      "has":false
    },
    {
      "id":54,
      "icon":"icon-ion-ios-sunny-outline",
      "name":"Ar Quente",
      "has":true
    },
    {
      "id":55,
      "icon":"icon-child-seat-for-the-car",
      "name":"Bancos c\/ Aquecimento",
      "has":false
    },
    {
      "id":56,
      "icon":null,
      "name":"MP3 Player",
      "has":false
    },
    {
      "id":57,
      "icon":null,
      "name":"Controle de Velocidade",
      "has":false
    },
    {
      "id":58,
      "icon":"icon-compact-disc",
      "name":"DVD Player",
      "has":false
    },
    {
      "id":59,
      "icon":null,
      "name":"Disqueteira",
      "has":false
    },
    {
      "id":60,
      "icon":"icon-ion-ios-sunny-outline",
      "name":"Farol de Xen\u00f4nio",
      "has":false
    },
    {
      "id":61,
      "icon":null,
      "name":"Limpador Traseiro",
      "has":true
    },
    {
      "id":62,
      "icon":null,
      "name":"R\u00e1dio c\/ Fita",
      "has":false
    },
    {
      "id":63,
      "icon":null,
      "name":"Sensor de Chuva",
      "has":false
    },
    {
      "id":64,
      "icon":null,
      "name":"Sensor de Estacionamento",
      "has":false
    },
    {
      "id":65,
      "icon":null,
      "name":"Piloto Autom\u00e1tico",
      "has":false
    },
    {
      "id":66,
      "icon":null,
      "name":"Blue & Me",
      "has":false
    },
    {
      "id":67,
      "icon":"icon-steering-wheel",
      "name":"Volante com comando de som",
      "has":false
    },
    {
      "id":68,
      "icon":"icon-ion-ios-paperplane-outline",
      "name":"Aerof\u00f3lio",
      "has":false
    },
    {
      "id":69,
      "icon":"icon-compact-disc",
      "name":"Kit Multim\u00eddia (GPS e\/ou DVD)",
      "has":false
    },
    {
      "id":70,
      "icon":"icon-airbag",
      "name":"Airbag Lateral",
      "has":false
    },
    {
      "id":71,
      "icon":"icon-airbag",
      "name":"Airbag Motorista",
      "has":false
    },
    {
      "id":72,
      "icon":"icon-airbag",
      "name":"Airbag Passageiro",
      "has":false
    },
    {
      "id":73,
      "icon":"icon-ion-ios-bolt-outline",
      "name":"Ajuste El\u00e9trico",
      "has":false
    },
    {
      "id":74,
      "icon":null,
      "name":"Calotas",
      "has":false
    },
    {
      "id":75,
      "icon":null,
      "name":"Entrada USB",
      "has":false
    },
    {
      "id":76,
      "icon":null,
      "name":"Kit G\u00e1s",
      "has":false
    },
    {
      "id":77,
      "icon":null,
      "name":"Sensor de Farol",
      "has":false
    },
    {
      "id":78,
      "icon":null,
      "name":"Toca-fitas",
      "has":false
    },
    {
      "id":79,
      "icon":null,
      "name":"Trio Eletrico",
      "has":false
    },
    {
      "id":80,
      "icon":"icon-car-door",
      "name":"Vidros El\u00e9tricos Traseiros",
      "has":false
    },
    {
      "id":83,
      "icon":null,
      "name":"Break Light",
      "has":false
    },
    {
      "id":84,
      "icon":null,
      "name":"Predisposi\u00e7\u00e3o para R\u00e1dio",
      "has":false
    }
  ]
}</code></pre>

                <h4>response params</h4>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>return</td>
                      <td>bool false|true</td>
                    </tr>
                    <tr>
                      <td>optionals</td>
                      <td>array</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </section>


          <section class="docs-section" id="api-optionals-add">
             <h1>/api/optionals/add</h1>

              <div class="docs-sub-section" id="api-optionals-add-post">
                <h2>POST /api/optionals/add</h2>

                <h4>params</h4>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>value</td>
                      <td>string</td>
                      <td><strong>Obrigatório</strong></td>
                    </tr>
                    <tr>
                      <td>icon</td>
                      <td>string</td>
                      <td><strong>Obrigatório</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4>request</h4>
                <pre v-highlightjs><code class="bash">curl -XPOST -d 'value=Nome&icon=icon-ion-ios-alarm-outline' 'http://localhost/carro-minuto-admin/api/optionals/add'</code></pre>

                <h4>response</h4>
                <pre v-highlightjs><code class="json">{
  "return":true
}</code></pre>

                <h4>response params</h4>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>return</td>
                      <td>bool false|true</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </section>

          <section class="docs-section" id="api-optionals-delete">
             <h1>/api/optionals/delete/{car_id}</h1>

              <div class="docs-sub-section" id="api-optionals-delete-post">
                <h2>POST /api/optionals/delete/{car_id}</h2>

                <h4>url</h4>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>car_id</td>
                      <td>integer</td>
                      <td><strong>Obrigatório</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4>params</h4>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>optional_id</td>
                      <td>integer</td>
                      <td><strong>Obrigatório</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4>request</h4>
                <pre v-highlightjs><code class="bash">curl -XPOST -d 'optional_id=27' 'http://localhost/carro-minuto-admin/api/optionals/delete/91'</code></pre>

                <h4>response</h4>
                <pre v-highlightjs><code class="json">{
  "return":true,
  "optionals":[
    {
      "id":1,
      "icon":"icon-ice-crystal",
      "name":"Ar condicionado",
      "has":true
    },
    {
      "id":2,
      "icon":"icon-ion-ios-circle-outline",
      "name":"4x4",
      "has":false
    },
    {
      "id":3,
      "icon":null,
      "name":"Dire\u00e7\u00e3o Hidr\u00e1ulica",
      "has":true
    },
    {
      "id":4,
      "icon":"icon-car-door",
      "name":"Vidros El\u00e9tricos",
      "has":false
    },
    {
      "id":5,
      "icon":"icon-ion-ios-bolt-outline",
      "name":"Travas El\u00e9tricas",
      "has":true
    },
    {
      "id":6,
      "icon":"icon-airbag",
      "name":"Air Bag",
      "has":false
    },
    {
      "id":7,
      "icon":"icon-ion-ios-pause-outline",
      "name":"Freios ABS",
      "has":false
    },
    {
      "id":8,
      "icon":"icon-cambio",
      "name":"C\u00e2mbio Autom\u00e1tico",
      "has":false
    },
    {
      "id":10,
      "icon":"icon-ion-ios-bell-outline",
      "name":"Alarme",
      "has":false
    },
    {
      "id":11,
      "icon":"icon-child-seat-for-the-car",
      "name":"Bancos de Couro",
      "has":false
    },
    {
      "id":12,
      "icon":null,
      "name":"Retrovisores El\u00e9tricos",
      "has":false
    },
    {
      "id":13,
      "icon":null,
      "name":"Rodas de Liga Leve",
      "has":false
    },
    {
      "id":14,
      "icon":"icon-steering-wheel",
      "name":"Volante com Regulagem de Altura",
      "has":false
    },
    {
      "id":15,
      "icon":null,
      "name":"Desemba\u00e7ador Traseiro",
      "has":true
    },
    {
      "id":16,
      "icon":"icon-child-seat-for-the-car",
      "name":"Banco do motorista com ajuste de altura",
      "has":false
    },
    {
      "id":18,
      "icon":"icon-ion-ios-sunny-outline",
      "name":"Farol de neblina",
      "has":false
    },
    {
      "id":19,
      "icon":null,
      "name":"Retrovisor fotocr\u00f4mico",
      "has":false
    },
    {
      "id":20,
      "icon":null,
      "name":"Encosto de cabe\u00e7a traseiro",
      "has":true
    },
    {
      "id":21,
      "icon":null,
      "name":"Porta-Copos",
      "has":false
    },
    {
      "id":22,
      "icon":null,
      "name":"Protetor de ca\u00e7amba",
      "has":false
    },
    {
      "id":23,
      "icon":null,
      "name":"Capota Mar\u00edtima",
      "has":false
    },
    {
      "id":24,
      "icon":"icon-cambio",
      "name":"Controle de Tra\u00e7\u00e3o",
      "has":false
    },
    {
      "id":25,
      "icon":"icon-ion-ios-navigate-outline",
      "name":"Gps",
      "has":false
    },
    {
      "id":26,
      "icon":"icon-car-door",
      "name":"Vidros Dianteiros El\u00e9tricos",
      "has":true
    },
    {
      "id":27,
      "icon":"icon-airbag",
      "name":"Air Bag Duplo",
      "has":false
    },
    {
      "id":29,
      "icon":null,
      "name":"R\u00e1dio",
      "has":false
    },
    {
      "id":30,
      "icon":null,
      "name":"Dire\u00e7\u00e3o El\u00e9trica",
      "has":false
    },
    {
      "id":31,
      "icon":null,
      "name":"Auto Falantes",
      "has":false
    },
    {
      "id":32,
      "icon":null,
      "name":"Computador de Bordo",
      "has":false
    },
    {
      "id":33,
      "icon":null,
      "name":"Park Pilot",
      "has":false
    },
    {
      "id":34,
      "icon":null,
      "name":"Start-Stop",
      "has":false
    },
    {
      "id":35,
      "icon":null,
      "name":"Teto Solar",
      "has":false
    },
    {
      "id":36,
      "icon":null,
      "name":"Bluetooth",
      "has":false
    },
    {
      "id":37,
      "icon":null,
      "name":"Sit & Adjust",
      "has":false
    },
    {
      "id":38,
      "icon":null,
      "name":"One Shape",
      "has":false
    },
    {
      "id":39,
      "icon":"icon-ion-ios-thunderstorm-outline",
      "name":"Aerowischer",
      "has":false
    },
    {
      "id":40,
      "icon":null,
      "name":"EBD - Distribui\u00e7\u00e3o Eletr\u00f4nica de Frenagem",
      "has":false
    },
    {
      "id":41,
      "icon":null,
      "name":"ESS - Alerta de Frenagem de Emerg\u00eancia",
      "has":false
    },
    {
      "id":42,
      "icon":null,
      "name":"Travamento El\u00e9trico das Portas",
      "has":true
    },
    {
      "id":49,
      "icon":null,
      "name":"Revis\u00f5es Realizadas",
      "has":false
    },
    {
      "id":50,
      "icon":"icon-ion-ios-telephone-outline",
      "name":"Garantia de f\u00e1brica",
      "has":false
    },
    {
      "id":51,
      "icon":null,
      "name":"Blindado",
      "has":false
    },
    {
      "id":52,
      "icon":"icon-ion-ios-body-outline",
      "name":"Adaptado p\/ Deficientes",
      "has":false
    },
    {
      "id":53,
      "icon":null,
      "name":"CD Player",
      "has":false
    },
    {
      "id":54,
      "icon":"icon-ion-ios-sunny-outline",
      "name":"Ar Quente",
      "has":true
    },
    {
      "id":55,
      "icon":"icon-child-seat-for-the-car",
      "name":"Bancos c\/ Aquecimento",
      "has":false
    },
    {
      "id":56,
      "icon":null,
      "name":"MP3 Player",
      "has":false
    },
    {
      "id":57,
      "icon":null,
      "name":"Controle de Velocidade",
      "has":false
    },
    {
      "id":58,
      "icon":"icon-compact-disc",
      "name":"DVD Player",
      "has":false
    },
    {
      "id":59,
      "icon":null,
      "name":"Disqueteira",
      "has":false
    },
    {
      "id":60,
      "icon":"icon-ion-ios-sunny-outline",
      "name":"Farol de Xen\u00f4nio",
      "has":false
    },
    {
      "id":61,
      "icon":null,
      "name":"Limpador Traseiro",
      "has":true
    },
    {
      "id":62,
      "icon":null,
      "name":"R\u00e1dio c\/ Fita",
      "has":false
    },
    {
      "id":63,
      "icon":null,
      "name":"Sensor de Chuva",
      "has":false
    },
    {
      "id":64,
      "icon":null,
      "name":"Sensor de Estacionamento",
      "has":false
    },
    {
      "id":65,
      "icon":null,
      "name":"Piloto Autom\u00e1tico",
      "has":false
    },
    {
      "id":66,
      "icon":null,
      "name":"Blue & Me",
      "has":false
    },
    {
      "id":67,
      "icon":"icon-steering-wheel",
      "name":"Volante com comando de som",
      "has":false
    },
    {
      "id":68,
      "icon":"icon-ion-ios-paperplane-outline",
      "name":"Aerof\u00f3lio",
      "has":false
    },
    {
      "id":69,
      "icon":"icon-compact-disc",
      "name":"Kit Multim\u00eddia (GPS e\/ou DVD)",
      "has":false
    },
    {
      "id":70,
      "icon":"icon-airbag",
      "name":"Airbag Lateral",
      "has":true
    },
    {
      "id":71,
      "icon":"icon-airbag",
      "name":"Airbag Motorista",
      "has":false
    },
    {
      "id":72,
      "icon":"icon-airbag",
      "name":"Airbag Passageiro",
      "has":false
    },
    {
      "id":73,
      "icon":"icon-ion-ios-bolt-outline",
      "name":"Ajuste El\u00e9trico",
      "has":false
    },
    {
      "id":74,
      "icon":null,
      "name":"Calotas",
      "has":false
    },
    {
      "id":75,
      "icon":null,
      "name":"Entrada USB",
      "has":false
    },
    {
      "id":76,
      "icon":null,
      "name":"Kit G\u00e1s",
      "has":false
    },
    {
      "id":77,
      "icon":null,
      "name":"Sensor de Farol",
      "has":false
    },
    {
      "id":78,
      "icon":null,
      "name":"Toca-fitas",
      "has":false
    },
    {
      "id":79,
      "icon":null,
      "name":"Trio Eletrico",
      "has":false
    },
    {
      "id":80,
      "icon":"icon-car-door",
      "name":"Vidros El\u00e9tricos Traseiros",
      "has":false
    },
    {
      "id":83,
      "icon":null,
      "name":"Break Light",
      "has":false
    },
    {
      "id":84,
      "icon":null,
      "name":"Predisposi\u00e7\u00e3o para R\u00e1dio",
      "has":false
    },
    {
      "id":85,
      "icon":"icon-ion-ios-alarm-outline",
      "name":"Nome",
      "has":false
    },
    {
      "id":86,
      "icon":"icon-ion-ios-alarm-outline",
      "name":"Nome",
      "has":false
    }
  ]
}</code></pre>

                <h4>response params</h4>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>return</td>
                      <td>bool false|true</td>
                    </tr>
                    <tr>
                      <td>optionais</td>
                      <td>array</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </section>

          <section class="docs-section" id="api-inspection-items-end-survey">
             <h1>/api/inspection-items/end-survey</h1>

              <div class="docs-sub-section" id="api-inspection-items-end-survey-post">
                <h2>POST /api/inspection-items/end-survey</h2>


                <h4>params</h4>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>car_id</td>
                      <td>integer</td>
                      <td><strong>Obrigatório</strong></td>
                    </tr>
                    <tr>
                      <td>user_id</td>
                      <td>integer</td>
                      <td><strong>Obrigatório</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4>request</h4>
                <pre v-highlightjs><code class="bash">curl -XPOST -d 'car_id=91&user_id=34' 'http://localhost/carro-minuto-admin/api/inspection-items/end-survey/'</code></pre>

                <h4>response</h4>
                <pre v-highlightjs><code class="json">{
  "return":true,
  "check":{
    "full_ans":{
      "approved":true,
      "group":[

      ]
    },
    "full_img":{
      "approved":true,
      "group":[

      ]
    }
  }
}</code></pre>

                <h4>response params</h4>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>return</td>
                      <td>bool false|true</td>
                    </tr>
                    <tr>
                      <td>check</td>
                      <td>object</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </section>


          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'PageProdutos',
  data() {
    return {
      menu: [
        {
          title: '/api/users/login',
          path: 'api-users-login',
          children: [
            { title: 'POST', path: 'api-users-login-post' },
          ],
        },
        {
          title: '/api/cars/get-list-car-avaliation',
          path: 'api-cars-get-list-car-avaliation',
          children: [
            { title: 'POST', path: 'api-cars-get-list-car-avaliation-post' },
          ],
        },
        {
          title: '/api/types-images/car-get-type-imgs/{car_id}',
          path: 'api-types-images-car-get-type-imgs',
          children: [
            { title: 'POST', path: 'api-types-images-car-get-type-imgs-post' },
          ],
        },
        {
          title: '/api/inspection-items/get-full-list',
          path: 'api-inspection-items-get-full-list',
          children: [
            { title: 'POST', path: 'api-inspection-items-get-full-list-post' },
          ],
        },
        {
          title: '/api/cars/get-description/{car_id}',
          path: 'api-cars-get-description',
          children: [
            { title: 'GET', path: 'api-cars-get-description-get' },
          ],
        },
        {
          title: '/api/cars/set-description/{car_id}',
          path: 'api-cars-set-description',
          children: [
            { title: 'POST', path: 'api-cars-set-description-post' },
          ],
        },
        {
          title: '/api/optionals/car/{car_id}',
          path: 'api-optionals-car',
          children: [
            { title: 'GET', path: 'api-optionals-car-get' },
            { title: 'POST', path: 'api-optionals-car-post' },
          ],
        },
        {
          title: '/api/optionals/add',
          path: 'api-optionals-add',
          children: [
            { title: 'POST', path: 'api-optionals-add-post' },
          ],
        },
        {
          title: '/api/optionals/delete/{car_id}',
          path: 'api-optionals-delete',
          children: [
            { title: 'POST', path: 'api-optionals-delete-post' },
          ],
        },
        {
          title: '/api/inspection-items/end-survey',
          path: 'api-inspection-items-end-survey',
          children: [
            { title: 'POST', path: 'api-inspection-items-end-survey-post' },
          ],
        },
      ],
    }
  },
  methods: {
    yourFunction(event, currentItem, lastActiveItem) {
      console.log(event, currentItem, lastActiveItem)
    },
  },
}
</script>
