const express = require('express')
var cors = require('cors')
const bodyparser = require('body-parser')

const app = express()
app.use(cors())
app.use("/images", express.static("./images"));
const port = 3001

const connectToDB = require('./db')
connectToDB()

app.use(bodyparser.json())
app.get('/', (req, res) => res.send('Hello World!'))

app.use('/auth',require('./routes/AdminRoutes/login'))
app.use('/auth',require('./routes/AdminRoutes/createAdmin'))
app.use('/auth',require('./routes/AdminRoutes/updateAdmin'))
app.use('/auth',require('./routes/AdminRoutes/deleteAdmin'))
app.use('/auth',require('./routes/AdminRoutes/getAdmins'))
app.use('/auth',require('./routes/AdminRoutes/getAdminbyid'))
app.use('/auth',require('./routes/AdminRoutes/getLoggedInAdmin'))

app.use('/auth/customer',require('./routes/CustomerRoutes/SignUp'))


app.use('/',require('./routes/ProductRoutes/addProduct'))
app.use('/',require('./routes/ProductRoutes/DeleteProduct'))
app.use('/',require('./routes/ProductRoutes/getProducts'))
app.use('/',require('./routes/ProductRoutes/getProduct'))
app.use('/',require('./routes/ProductRoutes/UpdateProduct'))
app.use('/',require('./routes/ProductRoutes/getFilteredProducts'))

app.use('/addneonsigns',require('./routes/addneonSigns'))
app.use('/getneonsigns',require('./routes/getneonSigns'))

app.use('/',require('./routes/BannerRoutes/createbanner'))
app.use('/',require('./routes/BannerRoutes/getbanners'))
app.use('/',require('./routes/BannerRoutes/getbannerbyid'))
app.use('/',require('./routes/BannerRoutes/updatebanner'))
app.use('/',require('./routes/BannerRoutes/deletebanner'))

app.use('/cmsmaster',require('./routes/CmsMasterRoutes/addCmsMaster'))
app.use('/cmsmaster',require('./routes/CmsMasterRoutes/getCmsMaster'))
app.use('/cmsmaster',require('./routes/CmsMasterRoutes/updateCmsMaster'))

app.use('/',require('./routes/ProductCategoryRoutes/createproductcategory'))
app.use('/',require('./routes/ProductCategoryRoutes/getProductCategories'))
app.use('/',require('./routes/ProductCategoryRoutes/deleteproductcategorybyid'))
app.use('/',require('./routes/ProductCategoryRoutes/updateProductCategory'))
app.use('/',require('./routes/ProductCategoryRoutes/getproductcategorybyid'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))