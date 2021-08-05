const readline = require("readline");

const readlinel = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlinel.question("hallo its you manu : ", function (name) {
  if (name == 1) {
    menu();
    // readlinel.close();
    readlinel.question(" manu : ", function (name) {
      if (name == 2) {
        add_books();
      } else {
        console.log("you put wrong details try again");
        readlinel.close();
      }

      readlinel.question(" manu : ", function (name) {
        if (name == 3) {
          console.log("are you sure if yes click y");
          readlinel.question(" manu : ", function (name) {
            if (name == "y") {
              readlinel.close();
            } else {
              console.log("you put wrong details try again");
              readlinel.close();
            }
          });
        }
      });
    });
  } else if (name == 2) {
    add_books();

    readlinel.question(" manu : ", function (name) {
      if (name == 3) {
        console.log("are you sure if yes click y");
        readlinel.question(" manu : ", function (name) {
          if (name == "y") {
            readlinel.close();
          } else {
            console.log("you put wrong details try again");
            readlinel.close();
          }
        });
      }
    });
  } else if (name == 3) {
    console.log("are you sure if yes click y");
    readlinel.question(" manu : ", function (name) {
      if (name == "y") {
        readlinel.close();
      } else {
        console.log("you put wrong details try again");
        readlinel.close();
      }
    });
  } else {
    console.log("you put wrong details try again");
    readlinel.close();
  }
});

menu = () => {
  console.log("To Kill a Mockingbird");
  console.log("1984, by George Orwell");
  console.log("Harry Potter and the Philosopher's Stone");
  console.log("The Lord of the Rings");
  console.log("The Great Gatsby");
  console.log("Pride and Prejudice");
  console.log("The Diary Of A Young Gir");
  console.log("Fahrenheit 451");
  console.log("Animal Farm");
};

add_books = () => {
  console.log("thanks for adding books");
};

readlinel.on("close", function () {
  console.log("Bye Bye!");
});
