# football_app

Web app to check players status and profiles using vanilla javascript in the frontend and Nodejs Microservices in the backend with Monogdb

## Architecture

I use here a microservices architecture, with two API (Nodejs) with their independent databases (Mongodb), you can take a look on the architecture diagram [here](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Onefootball%20Assignment%20Architecture%20by%20Mostafa%20Shawki#R7Vhdc6s2EP01frQHhD8f%2FUWbaTJNJ53e5r5kZJBBjUBEyDbur%2B8uCBsinGbmuk16p%2FFMjM5KSNqze7Ryz1smxQ%2BKZvGdDJnoEScset6qR8jU8eA%2FAscKGI6nFRApHlaQewYe%2BJ%2FMgI5BdzxkeaujllJonrXBQKYpC3QLo0rJQ7vbVor2rBmNmAU8BFTY6Bce6thsa%2BSc8R8Zj%2BJ6ZtcxloTWnQ2QxzSUhwbkrXveUkmpq6ekWDKBvqv9Uo3zL1hPC1Ms1e8ZMFrNZy%2BP7KeJN%2BVfRvfe16%2B3x37t5lwf6x2zEBxgmlLpWEYypWJ9RhewkwytgqfP0FRyl4YMZ3GgdR5yK2UGoAvgH0zroyGX7rQEKNaJMNZqCTjvxa0ZKJc7FZheN2vfmznbNeWLR52o%2FS8vv%2F7Wr0OEqojpN%2FoNTwRA4DKZMK2OME4xQTXft9dBTQhFp35nL8ODcXS3099a5J6KnZlproIYpyXO%2FP7GYkTuNLiaLU8hjn7eylQvpZCq7OPBx8clLCJFQ85aNn80nAxnDduKK3gRlynYUyQM38eFaIxZTlzP9ZFsreQza1i25R9YQprHJ9r3TGkOaXNLN0zcy5yb12%2Bk1jJpdJgLHqFBY3AsqGkFsCqm2mGBOzQx45K6bbyCU9I8q9yx5QWu4xSXSRGhFg3oIR8OFKuC5ibA9SygWT21e9GMP0VUswM9ngKyI%2F5wE6xoQHYIGas3HVdDjO7NjA4eziIyMUoYN%2FSjxr4l5roT3bXC6j%2Bd6OSdiT76yEQnVqLfKwmJ9n%2Bif7%2BJTqYfnOnTT5DorOD6dxw%2BmIxM89G8DZ9XRbNxNI0rqoP3TnW4QO3V1aGTqNnnJcr9bESRj5Rxz5JxX4FEAbROQ4vEmiKelFeLpre7pfFvFVWgYUGD56jku0uiy8nmtU52iqZZzyrWGu9Oc%2FQJ8YMwJQMOQrnlEElqEMCMxA%2BppvCFeI6duAoE65dNzBl%2FDPWzv8HbFVN9l0wHWRpdQUvd%2Bq5ktNQdu5aWwmy2mJ7Aq3M%2FfKNWXy0s8jtIfy97ZciAF33BN%2BhzwbMnqjQ%2ByiTbwamJVKyAmQ3N2RNsubie50eTtudnxHL81LH9XmNXd%2FvIrpwEPULhQJxzCfVd%2BZ%2B8qiL%2BPQK67wt27fpzyrZS6g0tR8%2FzHEQsYaUO3vFASdCCPQ9YjkbMEQ36s1PM4ghcotsUtUvPVKbsVZ1qIKuIfC2oCQ%2FD8pw84PQPGS0PnwOUf9Zh2SwyXxeh49MhZzHYwfNlOfPaSVU3G5yOukgl%2Fxip9knWI2OBbOQZTVs0jV92%2BMtU6Zd%2BXjoGjgzHJVlReqe2w1OE34tjeaA4dzLXdAunh%2FMQ08MzrycAazVH1f0zR8XFq8i3h8R40oqIoWunuTu7Tkj0sEqpf1wsbY1faL31Xw%3D%3D)

## Installation (Backend)

### Archive API

cd backend/archive-api

npm install

### Profile API

cd backend/profile-api

npm install

## Run

### Archive API

cd backend/archive-api

npm start

### Profile API

cd backend/profile-api

npm start

## Testing

### Archive API

cd backend/archive-api

npm test

### Profile API

cd backend/profile-api

npm test

## Frontend

You don't need to install anything or run anything, just open the index.html file, you can:

#### Acceptance criteria:

- type ​ **fabio**​ in the form, the player with id ​ fabio​ and its profile will display
- type ​ **giorgio​** in the form, a message saying the player is not available is displayed
- type ​ **francesco**​ in the form, a message saying the player is not available is displayed

![Demo](/demo.demo.gif "App Demo")
