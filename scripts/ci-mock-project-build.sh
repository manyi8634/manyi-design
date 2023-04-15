# Create a umi project

# clean up
rimraf ~tmpProj/

# clone project
git clone https://github.com/ant-design/create-next-app-manyid.git ~tmpProj --depth=1

# install
cd ~tmpProj
yarn

# build
yarn run build