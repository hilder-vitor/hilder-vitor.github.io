#!/bin/bash

###    Script to install the Latex Springer's library LLNCS
###    After running this script, you should be able to use \documentclass{llncs}
### in your latex files.

###   Tested on Ubuntu 19.04

# create directory in which the latex package will be installed
mkdir -p /usr/local/share/texmf/tex/latex/llncs2e

# dowload package from Springer's website
wget ftp://ftp.springernature.com/cs-proceeding/llncs/llncs2e.zip

# copy package
cp llncs2e.zip /usr/local/share/texmf/tex/latex/llncs2e/

# uncompress
cd /usr/local/share/texmf/tex/latex/llncs2e/
unzip llncs2e.zip

# erase unecessary files
rm fig1.eps llncs2e.zip llncsdoc.pdf samplepaper.tex history.txt readme.txt splncs04.bst

# update system
texhash

cd -
