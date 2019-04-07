# python in WebAssembly playground

here i tried just run pyumbral as WebAssembly module in browser in order to generate keys and encrypt.
as metamask wont give us private keys for encrypting data

## WebAssembly files already precompiled

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```


## to compile python modules
take https://github.com/iodide-project/pyodide
run ./run_docker.sh
inside docker run make
wait couple of hours
add pyumbral dependencies and pyumbral itself with
bin/pyodide mkpkg pyUmbral
bin/pyodide mkpkg PyNaCl

... some magic needed to make all this build successfully, still in progress, but several successes already
... e.g. patching meta.yaml after mkpkg and adding some debian-packages to debian in docker container

run 'make'
you'll have you python modules compiled to WebAssembly in 'build' folder, ready to be copied to frontend project
