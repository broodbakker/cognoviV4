if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return i[e]||(n=new Promise((async n=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},n=(n,i)=>{Promise.all(n.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(n)};self.define=(n,c,s)=>{i[n]||(i[n]=Promise.resolve().then((()=>{let i={};const a={uri:location.origin+n.slice(1)};return Promise.all(c.map((n=>{switch(n){case"exports":return i;case"module":return a;default:return e(n)}}))).then((e=>{const n=s(...e);return i.default||(i.default=n),i}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1004.d571671798daa8c51e97.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/11.a4166e53aa71cb6be446.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/1134.fbd573b7864eeb8d3361.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/18.59d16bf7ca6fafa1be71.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/1855.e23f0551202448caac18.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/1986.05989dec08b798a61ef4.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/1a48c3c1-25e09071bef7814d7f10.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/1bfc9850-b1f1582ad7083957d3df.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/2040.7c0575c1e8c4c5068d7f.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/2178.244244fb2cb43b6944e4.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/2282-5cfd3e02a0d9f2318c3d.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/2286.80e96d8e1a27990165f6.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/2442.a5d6adcf9312e68cdb28.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/255.501f4e9b4396eae6f2ef.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/2580.0cf69bf9e5256dc5f726.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/2716.ce04dc2f75bce6593a6d.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/2758-5f389e74dcfb681f18bb.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/2825.28691173bc82d703cdf4.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/2931.23e5ffa8d987854484c3.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/3028.df3a67d2f0d7b6f28b81.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/3225.e5e42c1230dbdafb5a33.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/3301.efd22878debe1521269c.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/3375.8bd1c65b75c99ee9e54d.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/345.a46b4048b393f603010c.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/3452.0d430c472858eec6d95d.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/3534.85369cf6d2e9bcaf7d97.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/3598.90adae3047f7a201b11d.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/3611.e7f83b0019a85f20cbec.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/3674.163d2bce0669756815cf.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/3683.5a2f935635f8ddfd5c0d.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/3690.e8760ef363e454ee5ed7.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/3758.fffe893beebebb9d9402.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/3764.45dd5f7a8df1aeade702.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/3850.d528d05884db71bcbb5f.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/3911.84ea89da7ce33be8d4c2.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/3947.9ec0fffd7ee812d7f3eb.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/395.9dc9642407dd22dada94.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/3997.c4b8cca7397a4552d9a5.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/4008.a1a600017257948e462a.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/4101.97056bd3af6c8590d4c2.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/4155.aaf7e4f189b8ff233655.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/440.04b2f9da835ea9c6647d.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/452.78dcd2a8e2e2164c0609.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/4522.6afa540a8f9de8a8ca2f.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/4667.4b8fd1a320d0da5734be.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/481.36be2753295273ec8e12.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/4823.76c58f2d8733fab059a0.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/496.375a18b7245a3827664d.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/5236.6c10817e03a813d24169.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/548.a0a6953e14c0d774d865.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/5628.95e76b77b7a33a7cf072.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/5737.6eb26c3a541bd8dd2817.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/5962.e6c5da69321158bef65f.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/6037-47d2a6e5fd356046f722.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/6508.5b2326fdd45060313ea8.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/6587.3fec6a45471862de551a.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/666.caf131d972e098f5078b.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/6763.755e093dc5f0c769acc3.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/6830.70858f49317b3a3132be.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/7044.2af3c6d7160a8260bdfa.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/7060.c50f88963b27906458dd.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/761.8452c0f6742f14eccb2c.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/7642.f17f914bdfdba011695a.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/7730.2f2517f26a7ec08c987b.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/7f0c75c1-0ad9f0238808260513d9.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/8068.ebb740474df58cdbc71a.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/8205.5a917a45c4a766c5862d.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/8395.8c03ad26eb7d3fbc7987.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/845.17cc3b305b80425293b6.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/8478.25cdab5e08b23a970fde.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/8606.95eb56927fa615d6f708.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/8627.6277daf159629238d23e.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/8692.a5dbe89ad33f17e2e079.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/8766.7aa9e50eb17706264e98.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/9154.0f9cf9aaf1ee04d9632c.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/9235.7303612c3d7966e21bd8.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/9399.65804e7902ed40988807.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/9408.037c1bbb91f20c8a1f5b.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/9446.ed7d9b0f2419c9c615ff.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/95.294e0f71dace9fbffe9e.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/9506.9aa422b05d71a16001f3.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/981.e4bb71c25db8db175afc.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/commons-16c6377da036ea932708.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/framework-c3fcb7e81b190bbb4a7c.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/main-94de86cb1ee9f5e5f5b1.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/pages/%5Bpost%5D-19ca260202402fbd5140.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/pages/404-d307e5a829ed88bad65a.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/pages/_app-b14cff69514e10701d12.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/pages/_error-9f25f479a546a22b157e.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/pages/contact-631135d8f74795fc6252.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/pages/history-dffdac9b6fe857038f28.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/pages/human-98aa8d7eaa100b101628.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/pages/index-3fd444914480426dafc9.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/pages/nature-64fb5a1fcb2099e08161.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/pages/net-binnen/%5Bid%5D-36ef7fc598fb00648e7c.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/pages/over-sciencegeek-449126f9baaf7541e8b2.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/pages/quirky-10dd103bcd1a1004a5b5.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/pages/space-d3da08a1d37c11912f9d.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/pages/tech-a1637ae2a1742022a0bf.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/polyfills-dba3e76732a807a91d11.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/chunks/webpack-60a670a5dc997a31e39a.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/css/8f4555fabb3e36d8ec19.css",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/zQU1cvJfwkyQqLQuEndUz/_buildManifest.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/_next/static/zQU1cvJfwkyQqLQuEndUz/_ssgManifest.js",revision:"zQU1cvJfwkyQqLQuEndUz"},{url:"/admin/config.yml",revision:"7530114391a87dde56592538ccd2cede"},{url:"/admin/index.html",revision:"62e734a80e99435241e5b7421e46fbf5"},{url:"/ico/cognovi.ico",revision:"5ba1c15555e94dc25c75aba6b0d088e2"},{url:"/ico/sciencegeekLogo.ico",revision:"06f56378a470a8487f2e1592d3a51429"},{url:"/img/404.png",revision:"5fce69847d9e0e33c98aea5237d4c6de"},{url:"/img/aarde-meteoriet-ruimte.jpg",revision:"ab51fd0565f853b0b5abf0750bfd3cca"},{url:"/img/algen-heuvels-groen.jpg",revision:"bf950b1493f5ae3d6bacfc81b636eb4e"},{url:"/img/alien-rugzakje-landschap.jpg",revision:"631daeb1264ca93a793999443f5560d0"},{url:"/img/batterijen-verzameling-divers.jpg",revision:"b0bcf235047cad87223159ce44cc4e1d"},{url:"/img/big-bang-verloop-sterren.jpg",revision:"8870b49484a19b9d6e817f08aba21cde"},{url:"/img/bliksemschichten-nacht-hemel.jpg",revision:"0721fe36be67c3e32c512acfbcd4e048"},{url:"/img/bloedvaten-hart-bloedcellen.jpg",revision:"7a7b44fcfe94486ec371ecf92fa166df"},{url:"/img/bol-explosie-rood-geel.jpg",revision:"a02f3fb3682df024186b23bf0c7b9bdd"},{url:"/img/bonobo-sociaal-partner.jpg",revision:"8bf29f7119f13fbb7810024989e9cbf3"},{url:"/img/boom-bladeren-groen.jpg",revision:"4ae44c66417c9306bcafb97ed514d26b"},{url:"/img/boomstammen-rivier-houthakkers.jpg",revision:"2c62a06fe553fac4b1000d080a5b1031"},{url:"/img/brand-brandweermannen-lussen.jpg",revision:"8cac67392f604bbb313189c01dfdb290"},{url:"/img/droogte-landschap-gele-bloem.jpg",revision:"b4a18521e748c24aa1d4d54b3b23a59c"},{url:"/img/drugsverslaafde-injectienaald-hoody.jpg",revision:"5429f5668e38f7a020f10848f1c1770d"},{url:"/img/externsteine-loopbrug-hoog.jpg",revision:"e675709cc0ef28234b5622f75d593b33"},{url:"/img/externsteine-zonsopgang-duitsland.jpg",revision:"555e424257a06c15b6c4aa39e8d19cda"},{url:"/img/fabriek-schoorstenen-rook.jpg",revision:"f466418f46f852f1ec59bd396fb08d08"},{url:"/img/flatgebouw-zonsondergang-paars.jpg",revision:"8c844ef802c55550a587318633ec85de"},{url:"/img/grot-water-blauw.jpeg",revision:"01ba0f1aa473a638c42cd55bd50e3312"},{url:"/img/hand-bloed-wond.jpg",revision:"101e008a893b331e518f06035e083b3f"},{url:"/img/jongens-zonnebrillen-gamen.jpg",revision:"4d955934eeb5ee18c3fdf945808cad4e"},{url:"/img/kameleon-dichtbij-groen.jpg",revision:"e4ec5fcccc37b98fdb22ec28eb011c03"},{url:"/img/kind-park-herfst.jpg",revision:"91f6cf0972be4bc361f891a5d08e279e"},{url:"/img/kind-schermtijd-computer.jpg",revision:"e0d2c2d8213e8b83a1747ff3f2bc878b"},{url:"/img/kinderen-blij-computer.jpg",revision:"d1dcc249e90b6a1ab796c1135d0477ab"},{url:"/img/krater-arizona-meteorietinslag.jpg",revision:"a853417670e912a8a7e83649cb24324d"},{url:"/img/londen-tekening-big-ben.jpg",revision:"4ade834dc2a718cdf7e0c4358a8e7347"},{url:"/img/maan-zee-maanlicht.jpg",revision:"bd2653965edab030a2df7a28035727d4"},{url:"/img/man-kater-alcohol.jpg",revision:"90213d7034fa210e52754053888a8061"},{url:"/img/man-springend-gelukkig.jpg",revision:"a5a8cfaefb79c882b27af01c915d97a0"},{url:"/img/man-vraagteken-computer.jpg",revision:"e76e71aebb68d88323b7e83956a00c5c"},{url:"/img/man-zaadcel-eicel.jpg",revision:"84dbaf14c7ce731a314c4be9aeef8f06"},{url:"/img/mannetjesleeuw-landschap-leeuwenmanen.jpg",revision:"55224860f8b61b1b9c94e39183ec400e"},{url:"/img/mayamaskers-beschildering-felle-kleuren.jpeg",revision:"ad56a52ffe2e199f52ace7ab4a95fe6c"},{url:"/img/muurrelief-el-palmar-ruïne.jpeg",revision:"37adb1fd15e03180deef58d20367b171"},{url:"/img/neuronen-verbinding-hersencellen.jpg",revision:"dcc465fe8bb8b602232fbdca8a254442"},{url:"/img/pestmeester-tekening-pestmasker.png",revision:"2f53c810d1bac1fa2b806d1ad9927f3d"},{url:"/img/photo1.jpg",revision:"ea42e0a3c578d1fbeb15c8754657b1b4"},{url:"/img/photo2.jpg",revision:"8898027c75171f596f7da635a9c10013"},{url:"/img/photo3.jpg",revision:"91d4052cf3f771a32454b708a21e8670"},{url:"/img/photo4.jpg",revision:"015b794fd41e04c50fbb250877eb18b1"},{url:"/img/photo5.jpg",revision:"2ca29d99f61dbd3ff08a3e926f990018"},{url:"/img/photo6.jpg",revision:"5fe1a07b48e1ee301cdff6ee8c64beab"},{url:"/img/photo7.jpg",revision:"c27593de61957338ff93c5f89493f32d"},{url:"/img/photo8.jpg",revision:"c27593de61957338ff93c5f89493f32d"},{url:"/img/planeten-verbinding-lichtstraal.jpg",revision:"2e3ca79fd89ac6d250ca9833dce7ef18"},{url:"/img/plastic-flesjes-blauw.jpg",revision:"fa024a5868c26a0a68654e4370fa28f8"},{url:"/img/regenwoud-bomen-zonlicht.jpg",revision:"1c8efffc4a0c460abfe07741cf7a5bd2"},{url:"/img/ruimte-horizon-meteorieten.jpg",revision:"c2b5b29407ad3d6255a1b503ab1476cf"},{url:"/img/ruiter-boogschutter-paardrijkunst.png",revision:"8c44ac985f4c2ce28757ee9a27bf7a19"},{url:"/img/schedel-sabeltandtijger-uitgestorven.jpg",revision:"9a0a534dcac51afcf44f1ac66146ccef"},{url:"/img/schermafbeelding-2019-10-28-om-23.27.51.png",revision:"e14af34d4e87dc4917dca5af386bfb44"},{url:"/img/schilderij-samuel-johnson.jpg",revision:"f944883681e7ed32198d7c34a4cbdee3"},{url:"/img/skelet-schedel-dood.jpg",revision:"0fb94d77419c009c01607accc9e6abc6"},{url:"/img/snoek-onderwater-rivier.jpg",revision:"8b12ce08e4c76ca3e7d8a6f6798ad16a"},{url:"/img/soldaat-vuurwapen-gevecht.jpg",revision:"d0e693b5e9b89c91b2823302ab8c6b3c"},{url:"/img/spanje-aquaduct-romeinen.jpg",revision:"c1f5954f27f9af0827bd89f9d4bb4b3b"},{url:"/img/speurneus-vergrootglas-vingerafdruk.png",revision:"696020a3c904f5c366a3bb0d09f7d6a5"},{url:"/img/spiraal-sterrenstelsel-ruimte.jpg",revision:"36473854a5b7c7c0190a88e05f2240ac"},{url:"/img/star-wars-actiepoppen-laserzwaard.jpg",revision:"1fa78037f85c06f3c38eb458116bb187"},{url:"/img/sterrenhemel-nacht-donker.jpg",revision:"f8140af0196301c6179dfc89e97c74e7"},{url:"/img/sterrenstelsel-nevel-ruimte.jpg",revision:"68735ecc1a2260c9222a52aacc3bf9df"},{url:"/img/strijder-zonsondergang-harnas.jpg",revision:"4020cccbfa826116751c563ee0035455"},{url:"/img/strijder-zonsondergang-harnas.png",revision:"8c44ac985f4c2ce28757ee9a27bf7a19"},{url:"/img/students-1807505_1280.webp",revision:"763c07cf2d8c1621f63ad9b28fd71fca"},{url:"/img/terrassen-nacht-druk.jpg",revision:"800aa23f69872bbc7f1d97bcac5eda7c"},{url:"/img/tsunami-kustlijn-overspoeld.jpg",revision:"56ecc04b04534832aba4228abfd612f9"},{url:"/img/tsunami-verwoesting-huizen.jpg",revision:"1805fe7f3a49b02db1aefe529165d6e1"},{url:"/img/turkije-aquaduct-byzanthium.jpg",revision:"90e027c7930fbd3590f34f68727b31bb"},{url:"/img/typemachine-papier-fake-news.jpeg",revision:"7bca2e0b00cd2bac2159bdc38ab4471d"},{url:"/img/vader-baby-slaap.jpg",revision:"99d274416e8371f7aa89f88810eccd64"},{url:"/img/vliegtuig-zonsondergang-oranje.jpg",revision:"35c8bc1838a94f2d07e062d70e814807"},{url:"/img/vrouw-afrekenen-verkoopbon.jpg",revision:"b994e1ca0ae8d4ba95996ace3c77d172"},{url:"/img/vrouw-bed-computer.jpg",revision:"7579a9780f6cc936591e3216f024f24d"},{url:"/img/vrouw-hologram-stad.jpg",revision:"1eada027cd57b4e3ee5caf9e6a2b8fe9"},{url:"/img/wandeling-park-herfst.jpg",revision:"7c75b90727ca5037d3ce4737b47a462a"},{url:"/img/wesp-bloem-paars.jpg",revision:"c48f4dfa42b26af0db37945cf354257e"},{url:"/img/wesp-tak-dichtbij.jpg",revision:"5d1cc8f4db365a1191480908c3ed19bf"},{url:"/img/wolven-intiem-stel.jpg",revision:"d5578a01b19344197037ef525fb13472"},{url:"/img/zanger-gitaar-microfoon.jpg",revision:"bfe7ac4c5d29e917e01846e5f53500aa"},{url:"/img/zombi-vrouw-eng.jpg",revision:"f89e0eb0cad5ee701c3dee441b20a9bb"},{url:"/img/zon-zonnevlam-zonnestorm.jpg",revision:"a2f9edc505f229c3e6799f94c6027b5d"},{url:"/variables.ts",revision:"647914068087d72ff2b26816531d8ee9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:i,state:c})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
