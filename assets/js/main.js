var app = new Vue({
  el:"#app",
  data:{
    page_title:'Peppers',
    title_image: 'ss_peppers_1.jpg',
    products:[
      {
        id:1,
        title:'Bell Peppers',
        short_text:'Red Bell Peppers',
        image:'red_bell_pepper.jpg',
        desc:'The most recognizable of the sweet pepper varieties are bell peppers, which are also the most commonly available. Bell peppers are easy to grow in the garden, and abundantly available in the produce section of your grocery store, generally in either green, red, yellow, or orange. But there is so much more variety than those four colors among bell peppers!'
      },
      {
        id:2,
        title:'California Wonder',
        short_text:'Red California Wonder',
        image:'california_wonder.jpg',
        desc:'The California Wonder is for you if you’re looking for a standard and reliable bell pepper. One plant produces two colors of bell pepper. These peppers will start green and can be harvested young and eaten at this stage, or you can leave them on the plant to fully ripen and turn red. These are very productive plants.'
      },
      {
        id:3,
        title:'Orange Sun',
        short_text:'Premium Orange Sun',
        image:'orange_sun.jpg',
        desc:'This variety produces large, premium quality orange bell peppers that can add color to your salads, fajitas, and kabobs, not to mention the color that it will add to your garden. Orange bell peppers also pack a punch when it comes to beta-carotene, which is what gives them their hue.'
      },
      {
        id:4,
        title:'Purple Beauty',
        short_text:'Purple Bell Peppers',
        image:'purple_beauty.jpg',
        desc:'These compact and sturdy plants produce purple bell peppers with a lime green interior. Purple colors do not hold up to cooking, so they are most stunning when eaten fresh! Their color can range from slight purple to a purple so dark it is almost black. These are some of my favorites!'
      },
      {
        id:5,
        title:'Jungle Parrot',
        short_text:'Red Jungle Parrot',
        image:'jungle_parrot.jpg',
        desc:'This variety gets its name from the beak-like point at the blossom end of the red bell pepper. Plants are small and compact and perfect for growing in containers on a deck or patio. These are sweet and delicious peppers when eaten fresh, but cooking them unlocks even more sweetness.'
      },
    ]
  },
  mounted:function(){
    console.log(window.localStorage.getItem('prod'));
  },
  methods:{
    addItem:function(id){
      window.localStorage.setItem('products', id)
    }
  },
})