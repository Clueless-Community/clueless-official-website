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

Go to <mark >./helpers/template.ts</mark> .

Remove everything and copy paste this code snippet.

```
export const template = {
    templateString : "http://localhost:3000"
}
```

**Note** : You can have different localhost other than 3000, use that in that case. 

## Setting up API Keys.

This is the most important part. There are Authentication, Database, Filter & search and Map APIs that you need to setup.

If you are assigned an issue mail us at **official.cluelesscommunity@gmail.com** with the PR link and your gitHub ID we will send you the credentials within 2 - 3 hours.

Create **.env.local** file in the root directory with the credentials you receive.

**Never push credentials to GitHub**

## Pushing changes or making changes

For pushing your updates make a new branch in this format.

**(your_name)/(functionality_name)**

And also describe a bit what changes made and try to attach screenshots.

Make sure that you push your PR into the **dev** branch instead of **main**

## Having problem?

If you face any problem you can mail us at **official.cluelesscommunity@gmail.com**.
