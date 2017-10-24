<template>
  <div class="page page-produtos">

    <div class="hero">
      <h1>Apis do Admin</h1>
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
              <h1>/users/login</h1>

              <div class="docs-sub-section" id="api-users-login-post">
                <h2>POST /users/login</h2>

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
                <pre v-highlightjs><code class="bash">curl -v -XPOST -d 'email=avaliador@nacional.com.br&password=123456' 'http://localhost/carro-minuto-admin/users/login'</code></pre>

                <h4>response</h4>
                <pre>Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 80 (#0)
> POST /carro-minuto-admin/users/login HTTP/1.1
> Host: localhost
> User-Agent: curl/7.54.1
> Accept: */*
> Content-Length: 46
> Content-Type: application/x-www-form-urlencoded
>
* upload completely sent off: 46 out of 46 bytes
< HTTP/1.1 302 Found
< Date: Fri, 20 Oct 2017 14:15:17 GMT
< Server: Apache/2.4.25 (Unix) OpenSSL/1.0.2j PHP/5.6.30 mod_perl/2.0.8-dev Perl/v5.16.3
< X-Powered-By: PHP/5.6.30
< <strong>Set-Cookie: CAKEPHP=hk2ufdc83ples047k9sdgrm7v4;</strong> path=/carro-minuto-admin/; HttpOnly
< Expires: Thu, 19 Nov 1981 08:52:00 GMT
< Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0
< Pragma: no-cache
< Location: http://localhost/carro-minuto-admin/
< Content-Length: 0
< Content-Type: text/html; charset=UTF-8
<
* Connection #0 to host localhost left intact
                </pre>

              </div>
            </section>


            <section class="docs-section" id="api-users-login">
              <h1>/ajax/getUpdateAuctions</h1>

              <div class="docs-sub-section" id="api-users-login-post">
                <h2>GET /ajax/getUpdateAuctions</h2>

                <h4>headers</h4>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>cookie</td>
                      <td>CAKEPHP <strong>Obrigatório</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4>request</h4>
                <pre v-highlightjs><code class="bash">curl -XGET -H 'Cookie: CAKEPHP=7f0fsrrp01ph63ivdhbq7q5ma2;' 'http://localhost/carro-minuto-admin/ajax/getUpdateAuctions'</code></pre>

                <h4>response</h4>
                <pre v-highlightjs><code class="json">{
  "return":true,
  "cars":[
    {
      "car_id":104,
      "car_name":"Subaru - Impreza SW - GL",
      "images":{
        "frente":"upload\/2017\/09\/27\/104\/showcase_imgs\/frente_32ceffef9947cd34c9768655403e32d1.jpg",
        "lateral":"upload\/2017\/09\/28\/104\/showcase_imgs\/lateral_esquerdo_59d53add2834f785b29d54a56008eae5.jpg"
      },
      "plaque":"ASD-1234",
      "views":0,
      "publish":false,
      "qtd_bids":0,
      "max_bid":"R$ 0,00",
      "max_bid_name":"",
      "time_last_bid":false,
      "users_auctions":0,
      "end_time":1507748328,
      "start_time":1507746528
    }
  ],
  "now":1508509279
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
  name: 'Admin',
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
