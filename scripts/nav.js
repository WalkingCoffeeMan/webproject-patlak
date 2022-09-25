//init branch
//test git push ci
var prefix ="pages/";
var pictureLink = "img/"
var scriptLink = "scripts/"
if(document.location.href.includes("pages"))
{
    prefix ="../pages/";
    pictureLink = "../img/";
    scriptLink = "../scripts/";
}
console.log("your prefix is "+prefix);

document.write(
  '  <nav class="navbar navbar-expand-sm navbar-light">\n' +
  '    <a class="navbar-brand" href="#">\n' +
  '      <img src="'+pictureLink+'mrobot.png" alt="MrRobot" width="300" height="240" class="pull-left">\n' +
  '    </a>\n' +
    '      <script src="'+scriptLink+'floppydisks.js"></script>' +
  '    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu" aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">\n' +
  '      <span class="navbar-toggler-icon"></span>\n' +
  '    </button>\n' +
  '    <div class="collapse navbar-collapse" id="toggleMobileMenu">\n' +
  '\n' +
  '      <ul class="navbar-nav ms-auto text-center">\n' +
  '        <li>\n' +
  '          <a class="nav-link" href="/webproject-patlak"><h1 class="text-light"> Home</h1></a>\n' +
  '        </li>\n' +
  '        <li>\n' +
  '          <a class="nav-link" href="'+prefix+'about.html"><h1 class="text-light">About</h1></a>\n' +
  '        </li>\n' +
  '        <li>\n' +
  '          <a class="nav-link" href="'+prefix+'services.html"><h1 class="text-light">Services</h1></a>\n' +
  '        </li>\n' +
    '        <li>\n' +
    '          <a class="nav-link" href="'+prefix+'favepisode.html"><h1 class="text-light">Stage2-Attack</h1></a>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <a class="nav-link" href="'+prefix+'buyfloppydisks.html"><h1 class="text-light">Floppy-Disks</h1></a>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <a class="nav-link" href="'+prefix+'contact.html"><h1 class="text-light">Contact</h1></a>\n' +
    '        </li>\n' +
  '      </ul>\n' +
  '\n' +
  '\n' +
  '    </div>\n' +
  '  </nav>\n');
