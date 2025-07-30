const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, firstname) => {
  if (err) return console.error("Error reading firstname:", err);

  fs.readFile("./lastname.txt", "utf-8", (err, lastname) => {
    if (err) return console.error("Error reading lastname:", err);

    fs.readFile("./age.txt", "utf-8", (err, age) => {
      if (err) return console.error("Error reading age:", err);

      fs.readFile("./hobbies.txt", "utf-8", (err, hobbiesData) => {
        if (err) return console.error("Error reading hobbies:", err);

        try {
          const hobbies = JSON.parse(hobbiesData); // 문자열을 배열로 파싱
          const sentence = `${firstname.trim()} ${lastname.trim()} is ${age.trim()} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}.`;
          console.log(sentence);
        } catch (parseErr) {
          console.error("Error parsing hobbies:", parseErr);
        }
      });
    });
  });
});
