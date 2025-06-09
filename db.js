const authors = [
    { id: 1, name: "Bryan" },
    { id: 2, name: "Christian" },
    { id: 3, name: "Jason" },
  ];
  
  async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId);
  };
  
  const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
  ];
  
  const footerItems = [
    {href: "/team", text: "Team"},
    {href: "/blog", text: "Blog"}
  ]

  const users = ["Rose", "Cake", "Biff"];

  module.exports = { getAuthorById, links, footerItems, users };
  