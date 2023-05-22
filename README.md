# ColorPaletteGenerator

# Color Palette Generator

Welcome to the Color Palette Generator. This innovative web application is designed to streamline the design process for frontend developers, enhancing user experience and customization. Utilizing the OpenAI API's "text-davinci-003" model, the app generates color palettes based on user search queries.

The intuitive user interface presents the generated color palettes along with corresponding HEX codes, allowing users to easily identify and select colors relevant to their projects. A unique feature of this application is the one-click copy-to-clipboard functionality, enabling seamless integration of chosen colors into users' workflows, saving time and effort.

The Color Palette Generator showcases the potential for AI-driven solutions to be applied to creative tasks and encourages further exploration of the intersection between artificial intelligence and design.

## Installation & Setup

This is a Flask app, so to run it, you need Python and Flask installed on your system. If you haven't done so already, please follow these steps:

1. Download and install Python here: https://www.python.org/downloads/

2. After installing Python, it's recommended to create a virtual environment to keep the dependencies required by different projects separate. To do this, run:
    ```shell
    python3 -m venv env
    ```
    Then, activate the virtual environment:
    On Windows, run:
    ```shell
    env\Scripts\activate
    ```
    On Unix or MacOS, run:
    ```shell
    source env/bin/activate
    ```
3. Install the required dependencies from the `requirements.txt` file:
    ```shell
    pip install -r requirements.txt
    ```
## OpenAI API Key

This app requires an API key from OpenAI. You can get one by creating an account on the OpenAI website: https://beta.openai.com/signup/

## Configuring Environment Variables

After you obtain your OpenAI API key, you need to create a .env file at the root of the project and add the following line to it:

```shell
OPENAI_API_KEY=your-api-key-here
```

Replace your-api-key-here with the actual API key you obtained from OpenAI.

## Running the App

Once you've set up your environment variables, you can run the app. Navigate to the root of the project directory in your terminal and enter:
```shell
flask run
```

This will start the app. You can then open your web browser and go to http://localhost:5000 to start using the Color Palette Generator.
