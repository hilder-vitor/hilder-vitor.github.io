/**************************************************************************
 * 		The left menu shown in every page is constructed here.
 * 		This script writes the HTML code of such menu when included with
 *			<script src="left_menu.js"></script>
 **************************************************************************/
document.write('\
<figure>\
			<img src="images/paris.jpg" style="width: 100%;" />\
			</figure>\
			<figcaption style="text-align:center; color:white; padding: 5px">\
			<b> Hilder Vítor Lima Pereira </b> <br /> <br />\
			I am a PhD student at <a href="http://www.crypto-uni.lu/" target="_blank" > The Applied Crypto Group (ACG)</a>, a laboratory of <a href="https://wwwen.uni.lu/" target="_blank">University of Luxembourg</a>.\
			</figcaption>\
			<ul>\
				<li id="li_ind"><a href="index.html" accesskey="1" title=""><b>Homepage</b></a></li>\
				<li id="li_pub"><a href="publications.html" accesskey="2" title=""><b>Publications</b></a></li>\
				<li id="li_tea"><a href="teaching.html" accesskey="3" title=""><b>Teaching</b></a></li>\
				<li id="li_not"><a href="notes.html" accesskey="4" title=""><b>Some notes</b></a></li>\
				<li id="li_mis"><a href="miscellaneous.html" accesskey="5" title=""><b>Miscellaneous</b></a></li>\
				<li id="li_con"><a href="contact.html" accesskey="6" title=""><b>Contact me</b></a></li>\
			</ul>\
');
