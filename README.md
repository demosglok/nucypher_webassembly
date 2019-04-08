# NuCypher project  in WebAssembly playground

As metamask don't give us private keys for using with nucypher encryption/reencryption i tried to put all nucypher stuff into browser. At least the part for working with keys. So it can later be reused for creating separate browser extension like metamask.
I decided to start with running only pyumbral lib in browser. For that i decided to use pyodide project with runs python in browser with webassembly

I managed to compile all necessary modules for pyumbral 
(see https://github.com/demosglok/pyodide) but it appeared that after everything was run in browser keys were not possible to generate. see *problems* section

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
take https://github.com/demosglok/pyodide
run ./run_docker.sh
inside docker run make
wait couple of hours
add pyumbral dependencies via running ./setup_libs
run `make` again

you'll have you python modules compiled to WebAssembly in 'build' folder, ready to be copied to frontend project

## problems
it appeared that after running in browser, and pressing "generate alice keys", one symbol was not found . its _ffi_prep_cif_.
this is part of libffi I added as one of dependencies. seems that though all modules like cffi was compiled into webassembly successfully, they were not linked with underlying libraries like libffi.so. It meant I need to compile libffi with emscripten.
after emscripten setup to build other libs besides python modules it appeared that libffi has .S files which are assembly files. and according to internet, no way to compile assembly into webassembly. so i gut stuck on this step and didn't move any further.

## possibilities
I envision possibility to find libffi port to webassembly or at least some implementation in pure C/C++ which could be compiled to webassembly. 
Other way is to wait till webassembly and emscripten start supporting assembly as input.

But most hopes are to patch pyumbral a little to remove dependency on cffi/openssl and use just pure encryption algorithms implemented as c/c++ routines and easily compilable into webassembly, so no need to take whole openssl into webassembly, but only necessary parts
