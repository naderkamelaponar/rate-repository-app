/** بسم الله الرحمن الرحيم */
import { Text, View, StyleSheet, Pressable } from "react-native";
import Avatar from "./components/Avatar";
import theme from "./theme";
const RepoHeader = ({ fullName, description, avatar, language }) => {
  const xd = StyleSheet.create({
    mainView: {
      flex: "display",
      width: 500,
      flexDirection: "row",
    },

    titleView: {
      padding: 5,
    },
    nameText: {
      color: theme.colors.textBlack,
      fontSize: theme.fontSizes.subHead,
      fontWeight: theme.fontWeights.bold,
      margin: 2,
    },
    descText: {
      color: theme.colors.textBlack,
      fontSize: theme.fontSizes.subHead,
      fontWeight: theme.fontWeights.normal,
      margin: 2,
    },
    repoPress: {
      color: theme.colors.textWhite,
      backgroundColor: theme.colors.bgPrimary,
      textAlign: "center",
      borderRadius: 5,

      width: 125,
    },
    pressText: {
      fontSize: theme.fontSizes.subHead,
      color: theme.colors.textWhite,
      padding: 3,
    },
    avatarImage: {
      height: 75,
      borderRadius: 5,
      width: 75,
      borderColor: theme.colors.textBlack,
      borderWidth: 1,
    },
  });

  return (
    <View style={xd.mainView}>
      <Avatar style={xd.avatarImage} url={avatar} alt={fullName} />

      <View style={xd.titleView}>
        <Text style={xd.nameText}>{fullName}</Text>
        <Text style={xd.descText}>{description}</Text>
        <Pressable
          onPress={() => {
            window.alert("it works!");
          }}
          style={xd.repoPress}
        >
          <Text style={xd.pressText}>{language}</Text>
        </Pressable>
      </View>
    </View>
  );
};
const RepoContent = ({ title, subTitle }) => {
  const xd = StyleSheet.create({
    mainView: {
      rowGap: 5,
      flex: 1,
      textAlign: "center",
      borderWidth: 1,
      borderRadius: 5,
    },
    subView: {
      padding: 5,
    },
    title: {
      color: theme.colors.textBlack,
      fontSize: theme.fontSizes.super,
      fontWeight: theme.fontWeights.bold,
    },
    subTitle: {
      color: theme.colors.textBlack,
      fontSize: theme.fontSizes.subHead,
      fontWeight: theme.fontWeights.normal,
    },
  });
  return (
    <View style={xd.mainView}>
      <View style={xd.subView}>
        <Text style={xd.title}>{title}</Text>
      </View>
      <View style={xd.subView}>
        <Text style={xd.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};
const RepoFooter = ({
  forksCount,
  ratingAverage,
  reviewCount,
  stargazersCount,
}) => {
  const xd = StyleSheet.create({
    mainView: {
      flex: "display",
      width: 500,
      flexDirection: "row",
    },
    subView: {
      width: 120,
      padding: 5,
    },
  });
  const resFormat = (no) => {
    let res = no;
    if (no > 1000) {
      res = (no / 1000).toFixed(1);
      if (parseFloat(res) === parseInt(res)) {
        res = parseInt(res);
      }
      res += "K";
    }
    return res;
  };
  forksCount = resFormat(forksCount);
  ratingAverage = resFormat(ratingAverage);
  reviewCount = resFormat(reviewCount);
  stargazersCount = resFormat(stargazersCount);

  return (
    <View style={xd.mainView}>
      <View style={xd.subView}>
        <RepoContent title={forksCount} subTitle={"Forks"} />
      </View>
      <View style={xd.subView}>
        <RepoContent title={ratingAverage} subTitle={"Rating"} />
      </View>
      <View style={xd.subView}>
        <RepoContent title={reviewCount} subTitle={"Reviews"} />
      </View>
      <View style={xd.subView}>
        <RepoContent title={stargazersCount} subTitle={"Stars"} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  subHead: {
    fontWeight: theme.fontWeights.normal,
    fontSize: theme.fontSizes.subHead,
    color: theme.colors.textSecondary,
  },
  textView: {
    margin: 5,
    backgroundColor: "#eee",
  },
});

const RepositoryItem = (repo) => {
  const rData = repo.repo;
  const {
    fullName,
    description,
    language,
    reviewCount,
    ratingAverage,
    forksCount,
    stargazersCount,
    ownerAvatarUrl,
  } = rData;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <RepoHeader
          fullName={fullName}
          avatar={ownerAvatarUrl}
          description={description}
          language={language}
        />
      </View>
      <View style={styles.container}>
        <RepoFooter
          reviewCount={reviewCount}
          ratingAverage={ratingAverage}
          forksCount={forksCount}
          stargazersCount={stargazersCount}
        />
      </View>
    </View>
  );
};
export default RepositoryItem;
