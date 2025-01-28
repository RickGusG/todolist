# TodoList Project

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [CocoaPods](https://cocoapods.org/) (for iOS development)

### Installation

1. Clone the repository:
  ```sh
  git clone git@github.com:RickGusG/todolist.git
  ```

2. Navigate to the project directory:
  ```sh
  cd todolist
  ```

3. Install the dependencies:
  ```sh
  yarn
  ```

4. For iOS, navigate to the `ios` directory and install CocoaPods dependencies:
  ```sh
  cd ios && pod install && cd ..
  ```

### Running the Project

To start the development server and run the project on your desired platform, use the following commands:

- Start the development server:
  ```sh
  yarn start
  ```

- Run on iOS:
  ```sh
  yarn ios
  ```

- Run on Android:
  ```sh
  yarn android
  ```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.