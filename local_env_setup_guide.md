# How to setup ClueLess in your local system?

Here are the exact steps you need to follow to run ClueLess in your local system!

## 1. Clone Repo or Download Files

So, first of all you need to do is clone the [Clueless-Community/clueless-official-website](https://github.com/Clueless-Community/clueless-official-website) GitHub repository or you can also download the files.

If you don't know how to clone or where to download the code the watch this video.

[How to Clone a GitHub Repo](https://www.youtube.com/watch?v=CKcqniGu3tA)
[Blog on the same topic, official GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

Or you can run this code in your PC/Laptop terminal 

```
git clone https://github.com/Clueless-Community/clueless-official-website.git
```

## 2. Installing all npm packages

Then you need to navigate to the directory and run the following code. This will install all the dependencies you need.

```
npm install
```
## 3. Setup helper

Before setting up any API keys you need to change the helper, so that it makes request to your localhost.

Go to <mark >./helpers/template.js</mark> .

Remove everything and copy paste this code snippet.

```
export const template = {
    templateString : "http://localhost:3000"
}
```

**Note** : You can have different localhost other than 3000, use that in that case. 

## Setting up API Keys.

This is the most important part. There are Authentication, Database, Filter & search and Map APIs that you need to setup. Let's go through all of them one by one.

Before jumping in just rename your <mark>**.env.example** file to **.env.local**</mark>

## Authentication API Keys

Here we have used <mark>firebase-authentication</mark> for authentication. 

We have three different authentication options.

- Google
- Twitter
- GitHub

Now for Google you first need to create OAuth credentials. Watch the video mentioned below.

[How to create Google OAuth Credentials (Client ID and Secret)](https://www.youtube.com/watch?v=xH6hAW3EqLk).

After you get the keys you need to setup the **google client ID** and **google client secret** in the **.env.local** file.

For Twitter watch this video.

[How to Get Twitter API Key 🔑 and Secret Key](https://www.youtube.com/watch?v=gLZE1L8UfqA)

After you get the keys you need to setup the **twitter client ID** and **twitter client secret** in the **.env.local** file.\

For GitHub watch this video.

[How to create GitHub OAuth App (client ID and client secret)](https://www.youtube.com/watch?v=R9lxXQcy-nM)

After you get the keys you need to setup the **GitHub client ID** and **GitHub client secret** in the **.env.local** file.

With that's done you are done with the authentication part.

## Firebase APIs

We are using Firebase as a backend. In this Project We have used Firebase Firestore, Firebase Auth, Firebase Storage.

[You can checkout the Docs for **Firebase**](https://firebase.google.com/docs)


## Mail API

We have configured Nodemailer for setting up Mailing Services.

[ You can watch this stuff for setting up **Nodemailer**](https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645)


## Shortcut

If you want to contribute here and dont't want to set all this up to get started. The you can shoot us a mail at official.cluelesscommunity@gmail.com with your GitHub profile URL and where you want to contribute. After reviewing We will send you the credentials.

**Never push credentials to GitHub**

## Pushing changes or making changes

For pushing your updates make a new branch in this format.

**(your_name)/(functionality_name)**

And also describe a bit what changes made and try to attach screenshots.

## Having problem?

If you face any problem you can mail us at **official.cluelesscommunity@gmail.com**.