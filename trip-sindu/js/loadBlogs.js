/**
 * Created by sachithra on 10/11/16.
 */
var blogs=[
    {
        url:"http://comexile.blogspot.com",
        title:"Com Exile",
        description:"ComExile is a personal tech-oriented blog focusing on bits of information from random topics."
    },
    {
        url: "http://astoldbysachi.blogspot.com",
        title: "As told by Sachi",
        description: "A lifestyle blog by Sachithra Dangalla"
    }
];
var blogParent=d3.select("#blog-list");
for (var i=0;i<blogs.length;i++){
var tempParent=blogParent.append("div").classed("blog-item",true);
    tempParent.append("h1").append("a").attr("href",blogs[i].url).text(blogs[i].title);
    tempParent.append("p").text(" - "+blogs[i].description);
}