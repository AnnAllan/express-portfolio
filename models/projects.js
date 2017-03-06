class Project {
  constructor(name, tech, gitLink, screenshot) {
    this.name = name
    this.tech = tech
    this.gitLink = gitLink
    this.screenshot = screenshot
  }
}

const projects = [
  new Project('Mary Poppins Choose Your Own Adventure', 'JavaScript', 'https://github.com/AnnAllan/mary-poppins-quiz', 'images/poppinsSS.jpg'),
  new Project('Personal Website', 'Bootstrap, HTML, Sass', 'https://github.com/AnnAllan/website', 'images/websiteSS.jpg'),
  new Project('Hartl Twitter Project', 'Ruby, Rails', 'https://github.com/AnnAllan/hartl_sample', 'images/hartlTwitterSS.jpg'),
  new Project('Skillcrush Coder Pintrest Project', 'https://github.com/AnnAllan/rails-pinning-app', 'images/skillcrushPintrestSS.jpg')
]
module.exports = {
  Project, projects
}
