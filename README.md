
<p align='center'>
<img src='https://raw.githubusercontent.com/takere/.github/main/docs/images/logo/logo.png' alt="logo" />
</p>

<h1 align='center'>Takere - Patient</h1>
<p align='center'>Takere for patients</p>
<p align="center">
	<a href="https://github.com/takere/takere-patient/actions/workflows/windows.yml"><img src="https://github.com/takere/takere-patient/actions/workflows/windows.yml/badge.svg" alt=""></a>
	<a href="https://github.com/takere/takere-patient/actions/workflows/macos.yml"><img src="https://github.com/takere/takere-patient/actions/workflows/macos.yml/badge.svg" alt=""></a>
	<a href="https://github.com/takere/takere-patient/actions/workflows/ubuntu.yml"><img src="https://github.com/takere/takere-patient/actions/workflows/ubuntu.yml/badge.svg" alt=""></a>
		<a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/React Native -0.66+-D0008F.svg" alt="React Native"></a>
	<a href="https://github.com/takere/takere-patient/blob/master/LICENSE"><img src="https://img.shields.io/github/license/takere/takere-patient" alt="License"></a>
	<a href="https://github.com/takere/takere-patient/releases"><img src="https://img.shields.io/github/v/release/takere/takere-patient" alt="Release"></a>
</p>

<hr />

## ❇ Introduction
Takere for patients is a system that allows patients to have access to their care plans. They can see its progress along with elements that they have to complete. It is developed using React Native, which is a mobile development framework for generating mobile applications using component-oriented programming (Section~\ref{background/cop}). It generates native applications for [Android](www.android.com) and [iOS](www.apple.com/ios) operating systems.

### Board
All care plan elements the patient should complete are grouped on the board. It is composed of a set of cards, where each card represents a care plan element, and it has two parts: the front and the back. The first is composed of four elements: the care plan element name, a title, its description, and an icon. Also, card color is defined by the care plan element color. The back contains care plan information (name and description), title of care plan element (Figure 1), the content of the care plan element (Figure 2), and a finish button.

#### Figure 1

![Generated cards based on some care plan flow](https://raw.githubusercontent.com/takere/takere-patient/master/docs/images/explanation/board.png)

#### Figure 2

![Card content of some care plan element from board](https://raw.githubusercontent.com/takere/takere-patient/master/docs/images/explanation/board-detail.png)

### Agenda
The agenda aims to highlight care plan elements that should be finished as soon as possible. For that, we use two strategies: grouping these elements by deadline day and using colors (Figure 3). The first approach uses two groups: "today" and "tomorrow", and each of them contains care plan elements with the deadline for today or tomorrow, respectively. We have chosen to not include other groups because the agenda goal is to display urgent care plan elements that should be finished, and showing more than necessary can reduce its impact and cause unnecessary anxiety to patients. The second approach use colors to highlight elements closest to the deadline: red for today and yellow for tomorrow. This approach is based on studies showing that colors can engage people to do tasks.

#### Figure 3

![Agenda screen](https://raw.githubusercontent.com/takere/takere-patient/master/docs/images/explanation/agenda.png)

### Progress
Progress screen shows patient progress in his/her care plans. For each care plan, it is shown a set of items containing progress information about each care plan element. This information includes the total of care plan elements of each type along with how many of them were completed, as shown in Figure 4. 

#### Figure 4

![Progress screen](https://raw.githubusercontent.com/takere/takere-patient/master/docs/images/explanation/progress.png)

## 👥 Acknowledgements
Special thanks to [Rodolfo Viola](https://github.com/rodolfoviolac) for starting development of the platform.

## ✔ Requirements

```
Coming soon
```

## ℹ How to run

```
Coming soon
```

## 🖼 Gallery

```
Coming soon
```


## 🚩 Changelog
Details about each version are documented in the [releases section](https://github.com/takere/takere-patient/releases).

## 🗺 Project structure
![architecture](https://raw.githubusercontent.com/takere/takere-patient/master/docs/images/design/architecture.png)

## 📁 Files

### /
|        Name        |Type|Description|
|----------------|-------------------------------|-----------------------------|
|\_\_tests\_\_|`Directory`|Test files|
|android|`Directory`|Android source files|
|docs |`Directory`|Documentation files|
|ios|`Directory`|iOS source files|
|src     |`Directory`| Source files|

### /src
|        Name        |Type|Description|
|----------------|-------------------------------|-----------------------------|
|assets|`Directory`|Application static files|
|components|`Directory`|Collection of user interface components (like buttons and inputs) that can be used across various files in the project|
|config|`Directory`|Environment variables and configuration related files|
|models / domain / dto|`Directory`|Data and database model files|
|navigators|`Directory`|Files responsible for defining application navigation routes|
|parts|`Directory`|User interface components used for composing components|
|providers|`Directory`|Files responsible for managing local data |
|services|`Directory`|Files responsible for business logic|
|screens|`Directory`|Files responsible for showing information to users according to some navigation route|
|App.tsx|`File`|Application point entry|

