const UserUtil = {
  nameFilter: (name) => {
    if (name.includes(" ")) {
      const names = name.split(" ");
      return `${names[0]} ${
        names[names.length - 1].length >= 10
          ? `${names[names.length - 1][0]}.`
          : names[names.length - 1]
      }`;
    } else {
      return name;
    }
  },
  imageSrcFilter: (source) => {
    return `${process.env.REACT_APP_BACKEND}${
      source.includes("tmp")
        ? source.split("tmp")[1]
        : source.split("public")[1]
    }`;
  },
  genderFilter: (gender) => {
    switch (gender.abbreviation) {
      case "M":
        return "Masculino";
      case "F":
        return "Feminino";
      case "N":
        return "Não Especificado";
      case "O":
        return gender.customName;
    }
  },
  emailValidation: (email) => {
    return email.includes("@") && email.includes(".com");
  },
  grettings: (name = '') => {
    let time = new Date().getHours();
    return `${
      time >= 0 && time < 12 ?
      'Bom dia'
      :
      time >= 12 && time < 18 ?
      'Boa tarde' 
      :
      'Boa noite'
    }${name && `, ${name}`}!`; 
  }
};  

export default UserUtil;
