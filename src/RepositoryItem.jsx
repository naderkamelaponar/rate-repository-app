/** بسم الله الرحمن الرحيم */
import { Text, View, StyleSheet, Pressable } from "react-native";
import Avatar from "./Avatar";
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
      width: 400,
      color: theme.colors.textBlack,
    },
    nameText: {
      color: theme.colors.textBlack,
      fontSize: theme.fontSizes.subHead,
      fontWeight: theme.fontWeights.bold,
    },
    descText: {
      color: theme.colors.textBlack,
      fontSize: theme.fontSizes.subHead,
      fontWeight: theme.fontWeights.normal,
    },
    repoPress: {
      color: theme.colors.textWhite,
      backgroundColor: theme.colors.bgPrimary,
      textAlign: "center",
      width: 100,
    },
  });

  return (
    <View style={xd.mainView}>
      <Avatar url={avatar} alt={fullName} />

      <View style={xd.titleView}>
        <Text style={xd.nameText}>{fullName}</Text>
        <Text style={xd.descText}>{description}</Text>
        <Pressable style={xd.repoPress}>{language}</Pressable>
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
      justifyContent: "space-around",
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
      <Text style={xd.title}>{title}</Text>
      <Text style={xd.subTitle}>{subTitle}</Text>
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
      <RepoContent title={forksCount} subTitle={"Forks"} />
      <RepoContent title={ratingAverage} subTitle={"Rating"} />
      <RepoContent title={reviewCount} subTitle={"Reviews"} />
      <RepoContent title={stargazersCount} subTitle={"Stars"} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  header: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
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
    <View style={styles.container}>
      <RepoHeader
        fullName={fullName}
        avatar={ownerAvatarUrl}
        description={description}
        language={language}
      />
      <RepoFooter
        reviewCount={reviewCount}
        ratingAverage={ratingAverage}
        forksCount={forksCount}
        stargazersCount={stargazersCount}
      />
    </View>
  );
};
export default RepositoryItem;
