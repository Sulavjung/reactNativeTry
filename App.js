import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Animated,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";
import { ProgressChart } from "react-native-chart-kit";
import ProgressChartAnimated from "./ProgressBarAnimated";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Tasks");
  const value = useRef(new Animated.Value(0)).current;

  const tasks = [
    {
      name: "Buy running shoes",
      description: "Go to Nike store and purchase a new pair of running shoes.",
      dueDate: "2024-02-20",
      completionPercentage: 0.5,
    },
    {
      name: "Attend meeting with clients",
      description:
        "Discuss project updates and deliverables with clients at the Nordstrom office.",
      dueDate: "2024-02-25",
      completionPercentage: 0.75,
    },
    {
      name: "Prepare presentation slides",
      description:
        "Create PowerPoint slides for the upcoming presentation on sales strategies.",
      dueDate: "2024-03-01",
      completionPercentage: 0.2,
    },
    {
      name: "Schedule dentist appointment",
      description:
        "Call the dentist office and book an appointment for a routine check-up.",
      dueDate: "2024-03-05",
      completionPercentage: 0.9,
    },
    {
      name: "Submit monthly report",
      description:
        "Compile sales data and financial summaries for the monthly report submission.",
      dueDate: "2024-03-10",
      completionPercentage: 0.4,
    },
    {
      name: "Research vacation destinations",
      description:
        "Browse travel websites and gather information on potential vacation spots.",
      dueDate: "2024-03-15",
      completionPercentage: 0.6,
    },
    {
      name: "Plan birthday party",
      description:
        "Organize a birthday celebration for a friend at a local restaurant.",
      dueDate: "2024-03-20",
      completionPercentage: 0.8,
    },
    {
      name: "Read book for book club",
      description:
        "Finish reading 'The Great Gatsby' for the next book club meeting.",
      dueDate: "2024-03-25",
      completionPercentage: 0.3,
    },
    {
      name: "Create budget for home renovation",
      description:
        "Calculate expenses and allocate funds for kitchen remodeling project.",
      dueDate: "2024-03-30",
      completionPercentage: 0.7,
    },
    {
      name: "Attend yoga class",
      description:
        "Join the evening yoga session at the local gym for relaxation and exercise.",
      dueDate: "2024-04-05",
      completionPercentage: 0.45,
    },
    {
      name: "Renew gym membership",
      description:
        "Log in to the gym website and renew the annual membership subscription.",
      dueDate: "2024-04-10",
      completionPercentage: 0.85,
    },
    {
      name: "Review resume",
      description: "Update and polish the resume for job applications.",
      dueDate: "2024-04-15",
      completionPercentage: 0.55,
    },
    {
      name: "Call mom",
      description:
        "Catch up with mom over the phone and share updates on recent events.",
      dueDate: "2024-04-20",
      completionPercentage: 0.25,
    },
    {
      name: "Plan weekend getaway",
      description:
        "Research nearby destinations and book accommodations for a weekend trip.",
      dueDate: "2024-04-25",
      completionPercentage: 0.65,
    },
    {
      name: "Update social media profiles",
      description:
        "Refresh profile information and upload recent photos on social media platforms.",
      dueDate: "2024-04-30",
      completionPercentage: 0.35,
    },
    {
      name: "Organize closet",
      description:
        "Sort through clothes and declutter the closet to make space for new items.",
      dueDate: "2024-05-05",
      completionPercentage: 0.75,
    },
    {
      name: "Register for cooking class",
      description:
        "Sign up for a cooking workshop to learn new recipes and culinary skills.",
      dueDate: "2024-05-10",
      completionPercentage: 0.5,
    },
    {
      name: "Plant flowers in garden",
      description:
        "Purchase flower seeds and plant them in the garden to enhance outdoor decor.",
      dueDate: "2024-05-15",
      completionPercentage: 0.7,
    },
    {
      name: "Volunteer at local shelter",
      description:
        "Offer assistance at the animal shelter by walking dogs and cleaning kennels.",
      dueDate: "2024-05-20",
      completionPercentage: 0.4,
    },
    {
      name: "Explore new hiking trail",
      description:
        "Discover scenic hiking trails in the area and plan a day trip for outdoor adventure.",
      dueDate: "2024-05-25",
      completionPercentage: 0.6,
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Tasks":
        return <TasksPage />;
      case "Completed":
        return <CompletedPage />;
      case "Settings":
        return <SettingsPage />;
      default:
        return null;
    }
  };

  const TasksPage = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View>
          <LinearGradient
            colors={["#00D415", "white"]}
            locations={[0, 0.8]}
            style={{
              position: "absolute",
              width: "100%",
              height: 300,
              borderBottomStartRadius: 100,
              borderBottomEndRadius: 100,
            }}
          />
        </View>

        {/* View for text and profile image */}
        <SafeAreaView
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",

            marginTop: 80,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 36, fontWeight: "bold" }}>Summary</Text>
          <TouchableOpacity onPress={() => handlePageChange("Settings")}>
            <Image
              source={require("./assets/icon.png")}
              style={{ width: 40, height: 40, borderRadius: 25 }}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <ScrollView>
          <View style={{ flex: 1, marginHorizontal: 20, gap: 10 }}>
            {[...Array(10)].map((_, i) => (
              <View
                key={i}
                style={{
                  width: "100%",
                  borderRadius: 20,
                  backgroundColor: "white",
                  marginBottom: 10, // Add marginBottom for spacing between views
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1,
                  elevation: 6,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{ width: "72%" }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        paddingStart: 15,
                      }}
                    >
                      {tasks[i].name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: "bold",
                        paddingStart: 15,
                        color: "#9F9F9F",
                      }}
                    >
                      {tasks[i].description}
                    </Text>
                  </View>
                  <ProgressChartAnimated
                    value={tasks[i].completionPercentage}
                  />
                </View>
              </View>
            ))}

            {/* Additional content can be added here */}
          </View>
          <View></View>
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>{renderPage()}</View>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          paddingHorizontal: 30,
          paddingTop: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 9,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => handlePageChange("Tasks")}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 16 16"
          >
            <Path
              fill={currentPage === "Tasks" ? "green" : "black"}
              d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z"
            />
            <Path
              fill={currentPage === "Tasks" ? "green" : "black"}
              d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z"
            />
          </Svg>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePageChange("Completed")}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 16 16"
          >
            <Path
              fill={currentPage === "Completed" ? "green" : "black"}
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
            />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePageChange("Settings")}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="30s"
            height="30"
            fill={currentPage === "Settings" ? "green" : "black"}
            class="bi bi-person-lines-fill"
            viewBox="0 0 16 16"
          >
            <Path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CompletedPage = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View>
        <LinearGradient
          colors={["#00F0FF", "white"]}
          locations={[0, 0.8]}
          style={{
            position: "absolute",
            width: "100%",
            height: 300,
            borderBottomStartRadius: 100,
            borderBottomEndRadius: 100,
          }}
        />
        <ScrollView stickyHeaderIndices={[0, 2]}>
          {/* View for text and profile image */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
              paddingTop: 80,
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 36, fontWeight: "bold" }}>Tracker</Text>
            {/* <Image
              source={require("./assets/icon.png")}
              style={{ width: 40, height: 40, borderRadius: 25 }}
            /> */}
          </View>

          <View style={{ flex: 1, marginHorizontal: 20, gap: 20 }}>
            {[...Array(10)].map((_, i) => (
              <View
                key={i}
                style={{
                  width: "100%",
                  height: 100,
                  borderRadius: 20,
                  backgroundColor: "whitesmoke",
                  marginBottom: 10, // Add marginBottom for spacing between views
                }}
              ></View>
            ))}

            {/* Additional content can be added here */}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
              paddingTop: 80,
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 36, fontWeight: "bold" }}>Tracker</Text>
            <Image
              source={require("./assets/icon.png")}
              style={{ width: 40, height: 40, borderRadius: 25 }}
            />
          </View>
          <View style={{ flex: 1, marginHorizontal: 20, gap: 20 }}>
            {[...Array(10)].map((_, i) => (
              <View
                key={i}
                style={{
                  width: "100%",
                  height: 100,
                  borderRadius: 20,
                  backgroundColor: "whitesmoke",
                  marginBottom: 10, // Add marginBottom for spacing between views
                }}
              ></View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const SettingsPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <LinearGradient
          colors={["#FDF42A", "white"]}
          locations={[0, 0.8]}
          style={{
            position: "absolute",
            width: "100%",
            height: 300,
            borderBottomStartRadius: 100,
            borderBottomEndRadius: 100,
          }}
        />
        <ScrollView>
          <View style={{ flex: 1, marginHorizontal: 20, gap: 20 }}>
            {/* View for text and profile image */}
            <SafeAreaView
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",

                marginTop: 80,
              }}
            >
              <Text style={{ fontSize: 36, fontWeight: "bold" }}>Sulav</Text>
            </SafeAreaView>
            <View
              style={{
                width: "100%",
                height: 100,
                borderRadius: 20,
                backgroundColor: "whitesmoke",
              }}
            ></View>
            <View
              style={{
                width: "100%",
                height: 100,
                borderRadius: 20,
                backgroundColor: "whitesmoke",
              }}
            ></View>
            <View
              style={{
                width: "100%",
                height: 100,
                borderRadius: 20,
                backgroundColor: "whitesmoke",
              }}
            ></View>
            <View
              style={{
                width: "100%",
                height: 100,
                borderRadius: 20,
                backgroundColor: "whitesmoke",
              }}
            ></View>
            <Text style={{ fontSize: 26, fontWeight: "bold" }}>Tracker</Text>
            <View
              style={{
                width: "100%",
                height: 100,
                borderRadius: 20,
                backgroundColor: "whitesmoke",
              }}
            ></View>
            <View
              style={{
                width: "100%",
                height: 100,
                borderRadius: 20,
                backgroundColor: "whitesmoke",
              }}
            ></View>
            <View
              style={{
                width: "100%",
                height: 100,
                borderRadius: 20,
                backgroundColor: "whitesmoke",
              }}
            ></View>
            <View
              style={{
                width: "100%",
                height: 100,
                borderRadius: 20,
                backgroundColor: "whitesmoke",
              }}
            ></View>
            <View
              style={{
                width: "100%",
                height: 100,
                borderRadius: 20,
                backgroundColor: "whitesmoke",
              }}
            ></View>
            <Text style={{ fontSize: 26, fontWeight: "bold" }}>Personal</Text>
            <View
              style={{
                width: "100%",
                height: 100,
                borderRadius: 20,
                backgroundColor: "whitesmoke",
              }}
            ></View>
            <View
              style={{
                width: "100%",
                height: 100,
                borderRadius: 20,
                backgroundColor: "whitesmoke",
              }}
            ></View>
            <View
              style={{
                width: "100%",
                height: 100,
                borderRadius: 20,
                backgroundColor: "whitesmoke",
              }}
            ></View>

            {/* Additional content can be added here */}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default App;
