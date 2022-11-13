class User{
    constructor(UserID, list_of_done){
        this.UserID = UserID;
        this.list_of_done = list_of_done; 
        this.solved = list_of_done.length;
    }
}