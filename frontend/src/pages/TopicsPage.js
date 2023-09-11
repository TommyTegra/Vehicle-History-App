import React from "react";

function TopicsPage() {
    return (
        <>

            <h2>Web Dev Concepts</h2>

            <nav class="local">
                <a href="#servers">Servers</a>
                <a href="#design">Design</a>
                <a href="#optimization">Images</a>
                <a href="#favicon">Favicon</a>
                <a href="#css">CSS</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
            </nav>

            <article id="servers">
                <h3>Web Servers</h3>

                <p>The term “<strong>index</strong>” in its relationship with webpages and web <strong>servers
                    </strong> can be defined as the homepage or the default page/file that the server has been 
                    designed to return when it receives a request for “/”. The “/” in this case is designated as 
                    the “<strong>path to resource</strong>” where the resource itself can sometimes be not 
                    explicitly stated. This typically is based on the web server as well, in some instances, 
                    instead of “index”, “default” is used, or different file types are used based on the 
                    circumstances. </p>

                <p>The <strong>Inspector</strong> tool displays key items such as list of files, <strong>
                    status codes</strong>, <strong>request method</strong>, and <strong>request/response 
                    headers</strong> contents. These items can differ whether the file is on a web server 
                    or on a local computer. On a local computer, <strong>favicon.ico</strong> is provided 
                    by OSU web server and instead of status code 404 on main.css and main.js, “(failed)” 
                    is stated. The URL differs and there is no remote address on the local computer. Headers 
                    provide minimal details on the local computer such as “Content-Type” while on the web 
                    server, headers provide additional details such as data acceptance, accept-ranges, servers, 
                    accept-languages and so forth due to the <strong>HTTP</strong> request and response. </p>

                <p>By utilizing the Inspector tool, it states that favicon.ico has a status code 200 while 
                    the main.css and the main.js files do not. The reason that the main.css and the main.js 
                    both contain a status code 404 is because the files cannot be located. This makes sense 
                    because those two files are not provided in the folder however, favicon.iso was also not 
                    provided but has a status code 200. The reason that it alone has a status code 200 is 
                    because the OSU server instead provided that file automatically.</p>

                <p>The URL to this web file is https://web.engr.oregonstate.edu/~nguyeto2/a1-nguyeto2/index.html, 
                    which can be broken up to its components. The <strong>scheme</strong> is “https”, its <strong>
                    subdomains</strong> are “web” and “engr”, its <strong>domain</strong> is “oregonstate.edu”, 
                    and lastly, its path to resource is “/~nguyeto2/a1-nguyeto2/index.html”. The actual resource/
                    file is the “index.html” file and as convention with the name of the file, it is assigned to 
                    be the designated homepage.</p>

            </article>

            <article id="design">
                <h3>Frontend Design</h3>

                <p>The idea of <strong>frontend design</strong> is the environment that the user connects, 
                    interacts, and experiences with. Being that it is directly touched by the user, it 
                    should be visually appealing and become a positive experience for the user. This can be 
                    accomplished by properly designing the <strong>graphical user-interface</strong>, or 
                    <strong> GUI</strong>, and the visual design of the webpage for a friendly user interaction. 
                    Components and elements to consider are such things as <strong>navigation systems </strong> 
                    for easy exploration, <strong>color</strong>, <strong>font</strong>, and <strong>typography 
                    scheme</strong> for visual appeal, and <strong>icons</strong>, <strong>illustrations</strong>, 
                    and <strong>photography</strong> for graphical/media charm. </p>
            
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>How adequate and successful the webpage is designed to guide the user to complete 
                        their objective. </dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>How proficient, quick, and straightforward the webpage can yield results for the user. </dd>
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>How painless and accessible it is to explore throughout the webpage to achieve the user's 
                        objective. </dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>How the webpage avoids any obstacles or potential obstructions, especially through any 
                        design flaws and/or glitches. </dd>
                    <dt><strong>Enjoyable/Engaging</strong></dt>
                    <dd>Through the combination of the previous “E”s, a pleasant and likable experience was given 
                        to the user, which motivates the user to return. </dd>
                </dl>

                <p>With <strong>page layout tags</strong>, elements and contents can be organized to assist in 
                    readability in code. <strong>&lt;header&gt;</strong> tags are for things such as banners, 
                    titles, publishers, organizers, and slogans. <strong>&lt;nav&gt;</strong> tags are used to 
                    group links together for other pages to explore such as tools, locations, legal, main menu, 
                    and other pages that are relevant. <strong>&lt;main&gt;</strong> tags contain the primary 
                    content of the webpage. <strong>&lt;section&gt;</strong> tags groups relating content together. 
                    <strong>&lt;article&gt;</strong> tags are for individual or independent material/content, which 
                    is normally nested in the section element. <strong>&lt;aside&gt;</strong> tags for content to 
                    the sides of articles. <strong>&lt;figure&gt;</strong> tags are for media content. <strong>
                    &lt;blockquote&gt;</strong> tags for longer sections of quotes that provide uniqueness. 
                    <strong>&lt;footer&gt;</strong> tags are for credential information such as contact, legal, 
                    and ownership. <strong>&lt;div&gt;</strong> tags for content where other tags don't quite work. </p>

                <ol>
                    <li><strong>Anchors</strong> link <strong>external content</strong> by using the “<strong>href</strong>” 
                        attribute to specify the URL of the desired external content. The form of the URL to be used must be 
                        an <strong>absolute path</strong> for these situations. </li>
                    <li>Anchors link <strong>internal content</strong> by utilizing both a “href” attribute and an 
                        “<strong>id</strong>” attribute. The hyperlink with the anchor tags will use the “href” 
                        attribute, with its value having a hashtag preceding the reference. Then the desired internal 
                        content will have the “id” attribute with the same value/reference that was used in the “href” 
                        attribute in the anchor tag but with no hashtag. </li>
                    <li>Anchor tags can also be used for <strong>page-to-page</strong> content. This is similar to 
                        linking external content, but a <strong>relative path</strong> URL is used instead. For items 
                        in the same directory, either just the name or having “./” preceding the file name can be used. 
                        For items down a <strong>child directory</strong>, using “/” that goes through the names of the 
                        directories until reaching the desired file. Lastly, moving up <strong>parent directories </strong> 
                        can be referenced by using “../” with each “..” referring to one parent directory. </li>
                </ol>

            </article>

            <article id="optimization">
                <h3>Image Optimization</h3>

                <p>The significant specifications for web <strong>images</strong> are <strong>descriptive file 
                    names</strong>, <strong>tiny file sizes</strong>, <strong>utilizing only needed dimensions</strong>, 
                    ensuring the <strong>appropriate file format</strong>, <strong>lower resolution</strong>, and 
                    <strong> proper color modes</strong> for the image. The reason for using descriptive file names 
                    is for <strong>search engine optimization</strong>, the name of the file helps the image get 
                    categorized for search engines for anyone looking for similar images. Small file sizes, using 
                    just needed dimensions, and lowering image resolution assists in the <strong>quicker loading 
                    times</strong>. Lastly, utilizing the appropriate file format and color modes ensures the images 
                    are clear and properly developed, so they can be displayed with <strong>minimum distortion</strong>. </p>

                <p>The appropriate file format for <strong>photography images</strong> is <strong>JPG</strong> and 
                    <strong> WebP</strong> files because they can compress with minimum distortion to small file 
                    sizes while keeping their rectangular aspect ratio. <strong>PNG</strong> files can be used for 
                    photos with <strong>line art</strong>, but the photo can end up having pixelated distortion, 
                    however, for just line art, they are compressible without any significant reduction in quality. 
                    <strong> GIF</strong> files can be used for a series of <strong>animations</strong>, such as in 
                    the form of a photo sequence or line art animations. Lastly, <strong>SVG</strong> files are for 
                    interactive, 2D images or mathematically derived animated images. </p>

            </article>

            <article id="favicon">
                <h3>Favicon</h3>

                <p>Favicons are used differently based on the requirements of the device and the browser. 
                    <strong> .SVG</strong> and <strong>.PNG</strong> formats are mostly used on standard devices 
                    and browsers, while <strong>.ICO</strong> formats are for older, or legacy, browsers which, 
                    as technology advances, favicons standards and requirements changes/advances along with it. 
                    The icon or emblem design is tailored for varying devices and browsers setups, which entails 
                    having multiple different versions via file formats. When the user is using a browser to access 
                    the webpage on their device, the browser will gather the available files. Based on the 
                    purpose/usage, will save the according file/icon to the anchor for the task, such as search 
                    engine results, display icon on a device screen, a bookmark, browser tab, and/or favorites list. </p>

            </article>

            <article id="css">
                <h3>Cascading Style Sheets</h3>

                <p>Using <strong>Cascading Style Sheets (CSS)</strong> can be used to boost <strong>readability</strong>, 
                    <strong> usability</strong>, and <strong>legibility</strong> regarding a webpage’s content, layout, 
                    structure, and components. In turn, CSS has the potential to increase the enjoyment the user obtains 
                    from using the webpage and the <strong>visual interest</strong>. Though HTML can already have its own 
                    style, CSS can nullify and applies its own style in its place. In addition, certain companies or brands 
                    may have their own theme or style that CSS can apply to the webpage where HTML cannot.</p>

                <p>The first of five ways to integrate style into webpages is to utilize <strong>externally linked 
                    .CSS files</strong>. By linking the stylesheet in the HTML &lt;head&gt;, all the rules that are 
                    specified in the .CSS file can be applied to the webpage; if desired, a single stylesheet be applied 
                    <strong> globally</strong>. The second way to integrate style is to <strong>embed</strong> it by using 
                    the &lt;style&gt; tags in the HTML file; this incorporates multiple different rules/styles in one 
                    section of the HTML file. Third is to use the <strong>inline</strong> method, which directly applies 
                    the style to the component that is inline with. Fourth is to use a <strong>JavaScript template 
                    literal</strong> in which a function applies the styles to the blocks. Fifth is the <strong>JavaScript 
                    Document Object Model (DOM)</strong> in which it goes through the HTML and updates the corresponding 
                    blocks with the specified style. </p>

            </article>

            <article id="forms">
                <h3>Forms</h3>

                <p>To make <strong>forms</strong> accessible, there are six goals to reach. First, <strong>instructions </strong> 
                    are placed on the <strong>label</strong> and directly on top of the form that is clear and visible. 
                    Prevents those with vision impairments from confusion and searching for directions. Second, clearly 
                    declare <strong>required fields</strong> and their reason that users understand their information&apos;s 
                    purpose. Third, the initial field should automatically be set to be filled out without further input by 
                    utilizing the <strong>autofocus</strong> attribute. This skips the step of finding a field and selecting it, 
                    especially useful for those with visual or fine motor impairments. Fourth, further assisting fine motor 
                    impairments, the forms should have the ability to be filled out by <strong>just the keyboard</strong>. 
                    Fifth, to utilize <strong>tab indexing</strong> so that fields can be sequentially completed to prevent 
                    from losing track of the needed forms. Lastly, any <strong>validation message</strong> that the user 
                    needs to see should be screen-readable so that it is not missed on accessibility-friendly screens. </p>

                <p>To start with forms, use <strong>&lt;form&gt;</strong> tags which have an <strong>action</strong> attribute 
                    which indicates where the information should go for further evaluation and the <strong>method </strong> 
                    attribute which indicates the HTTP method to utilize for the information being inputted. The next major 
                    tag is <strong>&lt;input&gt;</strong> which has a <strong>type</strong> attribute to change its design, 
                    a <strong>name</strong> attribute which ties the data to the according form, and also can contain a 
                    <strong> require</strong> attribute for needed fields of the form. The <strong>&lt;select&gt;</strong> 
                    tag has a name attribute as well, but this tag allows for the <strong>&lt;option&gt;</strong> tags, 
                    which is a drop-down menu that has a <strong>value</strong> attribute for each option to see the 
                    appropriate data with the option chosen. Lastly, the <strong>&lt;button&gt;</strong> tag has an action 
                    attribute which allows for submission of data based on the action attribute in the <strong>&lt;form&gt;
                    </strong> tag action attribute.</p>

                <p>To improve usability, start with adjusting <strong>size</strong>, <strong>borders</strong>, <strong>margins
                    </strong>, and <strong>paddings</strong> to make fields and text large enough for those with visual and 
                    fine motor impairments. Next is to use <strong>autofocus</strong> so that the user can immediately input 
                    their data without any other steps. Using <strong>required</strong> on a field depicts which fields 
                    require information that the user can give their inputs as needed. Furthering the required fields, it 
                    would be beneficial to have differing color display based on input validation and required fields. 
                    Having <strong>placeholders</strong> in fields gives the user another place to understand what is needed 
                    for input. Using two different styles for <strong>checked and unchecked boxes</strong> makes it clear 
                    that a selection was made. Lastly, using <strong>disabled and enabled</strong> on fields that requires a 
                    prior selection keeps clutter down and readability up. </p>
                
            </article>

            <article id="express">
                <h3>Express</h3>

                <p><strong>Node</strong> is a runtime environment that is based on <strong>JavaScript</strong> code that 
                    works on varying operating systems; it is used to cultivate and execute <strong>web applications </strong> 
                    in JavaScript. <strong>NPM</strong>, stands for <strong>Node Package Manager</strong>, and it is used to 
                    install additional packages to use in applications that were developed with Node. <strong>Express </strong> 
                    is a framework that is used/based in Node.js that is used to build <strong>API&apos;s</strong>, or 
                    <strong> Application Programming Interface</strong>. Essentially, these are all used together to build, 
                    develop, and test server-side web applications. The ease of using packages that contain already built 
                    and tried code prevents the need for “reinventing the wheel” and allows for development to be more 
                    efficient in building the web application. </p>

            </article>
            </>
    );
}
export default TopicsPage;