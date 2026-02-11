// Assignment 9: Access Modifiers

//1. Create a service class exposing only required public methods
//2. Keep internal data private
//3. Explain which members should be accessible and why

class AuthService {
    //Private : internal use only
  private users: string[] = ["admin", "guest"];
  private token: string | null = null;

    // Public: outside world can access it
  public login(username: string): boolean {
    if (this.users.includes(username)) {
      this.generateToken();
      return true;
    }
    return false;
  }

  public logout(): void {
    this.token = null;
  }

//Private Method
  private generateToken(): void {
    this.token = Math.random().toString();
  }
}

const auth = new AuthService();

auth.login("admin");   // allowed
auth.logout();        // allowed
// auth.users //Error



//4. Create a class with public, private, and protected members
//5. Try accessing them outside the class
//6. Which members should be exposed and why?
class User {
  public name: string;       // everyone can access
  private password: string;  // only inside class
  protected role: string;    // class + child classes

  constructor(name: string, password: string, role: string) {
    this.name = name;
    this.password = password;
    this.role = role;
  }

  public greet() {
    return `Hello ${this.name}`;
  }
}

class Admin extends User {
  showRole() {
    console.log(this.role); // allowed 
  }
}

const a = new Admin("Ulka", "123", "admin");


a.name        // allowed public
a.greet()     // allowed public

//a.password    // No private
//a.role        // No protected
a.showRole()  //accesses role
