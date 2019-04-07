<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>simple playground to test python in WebAssembly working with pyumbral lib</p>
    <div class="error" v-if="error">{{error}}</div>
    <div>Status: {{status}}</div>
    <textarea v-model="data" cols="100" rows="5"></textarea>
    <div>
      <button @click="genalicekey">generate alice keys</button>
      <button @click="encrypt">alice encrypt</button>
      <button @click="genbobkey">generate bobs keys</button>
      <button @click="grant">grant</button>
      <button @click="reencrypt">reencrypt</button>
      <button @click="decrypt">bob decrypt</button>
    </div>
  </div>
</template>

<script>
//import pyodide from 'pyodide-loader';
import pyodideLoader from '@/pyodide.js';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      error: null,
      pyodide: null,
      data: 'some data to encrypt',
      python: '',
      status: 'initial',
      alicekeys: null
    }
  },
  methods: {
    genalicekey() {
      this.alicekeys = this.pyodide.runPythonAsync('from pyUmral import keys\nprivkey = keys.UmbralPrivateKey.gen_key()\nprivkey');
    },
    encrypt() {},
    genbobkey() {},
    grant() {},
    reencrypt() {},
    decrypt() {}
  },
  mounted() {
/*
    if(window.languagePluginLoader) {
      window.languagePluginLoader.then(() => {
        console.log('wasm & python loaded', window.pyodide);
      })
    }
    */

    pyodideLoader('http://localhost:8080/pyodide/').then(() => {
      console.log('python loaded', window.pyodide);
      this.pyodide = window.pyodide;
      const pyver = this.pyodide.runPython('import sys\nsys.version');
      console.log('python res',pyver);
      this.status = `python loaded `;
      this.python = pyver;
      this.pyodide.loadPackage('pyUmbral').then(()=>{
        console.log('pyUmbral loaded')
        this.status='pyUmral loaded'
        //const b = pyodideInstance.runPython('from pyumbral import keys\nprivkey = keys.UmbralPrivateKey.gen_key()\nprivkey');
        //console.log('pyUmbral res',b);
      });
    })

    /*
    pyodide('http://localhost:8080/pyodide2/').then((loaded)=>{
      console.log('python loaded', loaded);
    })
    */
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
