# Retina Image Viewer

The goal of this very small web app is to simply allow a user to see a retina image (@2x) and regular image stacked side-by-side.

# How do I use this thing?
It's very simple! You need some degree of tech savvyness here, but not much.

First, open the file in the root called "config.json" - this is the file Retina Image Viewer will use to determine the name and filetype of your images. You *must* follow the Apple convention of using @2x for your retina image file name, and the same name without @2x for your normal file name.

Secondly, add your retina image (330 ppi) and your normal image (163 ppi) to the images folder.

Thirdly, go back to your config.json and change the settings as you need, aka, fileName and fileType:

```
{
  "fileName": "CHANGE THIS TO THE NAME OF YOUR FILE",
  "fileType": "CHANGE THIS TO THE FILE EXTENSION - png, jpg, bmp, etc"
}
```

Finally, doubleclick on the startserver.command file in the root directory - this will start a server on your localhost at port 8000. You can then open *any browser* and type in the ULR bar "http://localhost:8000"

# It doesn't work
Please, please, if something doesn't work, report it in the issues here on Github!

# Resources
## Designing for iPhone 4 Retina Display: Techniques and Workflow
http://mobile.smashingmagazine.com/2010/11/17/designing-for-iphone-4-retina-display-techniques-and-workflow/

"Building apps for the iPhone 4 Retina display involves creating two sets of images — one at 163 ppi and another at 326 ppi. The 326 ppi images include @2x at the end of their filename, to denote that they’re double the resolution."

## Creating Retina Images for Your Website
http://www.kylejlarson.com/blog/2012/creating-retina-images-for-your-website/
More of a design guide, but short and to the point - helpful in discussing retina app icon sizes for iPhone apps.


## Towards Retina Web
http://coding.smashingmagazine.com/2012/08/20/towards-retina-web/
Super thorough article on retina - explains differntiation in pixels amongst browsers, and many other things - it gets into more detail than a computer science book. From very reliable resource and author.