for e in *; do cd $e >/dev/null; [[ $e != '01-helloworld' ]] && echo $e; ln -sf ../01*/typings .; ln -sf ../01*/node_modules . ; cd -  >/dev/null; done;
