Implementation information.

Consideration aspects
1. Lightweight website
2. SEO friendly 
3. Followed DRY principle everywhere for site performance improvement.
4. Maintained alignement.

1. Created boileplate (starter template).
2. Added Bootstrap 5 as per the requirement.
3. Added Owl carousel and Jquery for testimonial and brands slider.
4. Tried semantic tags.

// Header

Created two headers for mobile and desktop. For mobile view full height and width is assigned and white background is provided.

// Brand section

For desktop view Brand logo displayed in grid view. For mobile view slider is added for brand logo.

// Services section
For desktop view 3 columns are displayed and for Ipad view displayed in 2 columns structure. For mobile view single columns is displayed. Assigned 2 line min-height for the services grid title. Assigned 6 line min-height for the description.
After 2 lines and 6 lines text is restricated and ellipses added this is implementated for the solving alignement issue.

//Benfits
Benfits are displayed in 4 columns for desktop view, for Ipad view 2 columns and mobile view 1 columns structure is implementated.

//testimonial
 For desktop view 3 reviews are displayed and 4th review is half displayed. For mobile view 1 review is displayed and 2nd is half displayed. Arrow are hide for the small devices.


//Implementation factors.
Created mixins , extends for reducing the css and for making easy development.In feature and changes are required then we need to do changes at only one place and it will reflect in thoughout the site.

Main focused area.
Hosted application on netlify. After every PR merge build will trigger and changes will reflect in first 5mins.
