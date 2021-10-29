//  const router = require('express').Router();
//  const apiRoutes = require('./api');

// router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.send("<h1>This is not the route you are looking for!</h1>")
// });

// module.exports = router;
const router = require('express').Router();
const categoryRoutes = require('./api/category-routes');
const productRoutes = require('./api/product-routes');
const tagRoutes = require('./api/tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
// router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>This is not the route you are looking for!</h1>")
});

module.exports = router;