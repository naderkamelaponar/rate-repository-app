/** بسم الله الرحمن الرحيم */
import { Text,  View ,StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      margin:10
    },
    textView:{
        margin:5,
        backgroundColor: '#eee'
    }
  });
  const RepoLine =({label,data})=>{
    return <Text style={styles.textView} >{label} {':'} {data} </Text>
  }
const RepositoryItem = (repo)=>{
    const rData =  repo.repo
    return (
        <View style={styles.container}> 
            <RepoLine label={'id'} data={rData.id} />
            <RepoLine label={'full Name'} data={rData.fullName} />
            <Text> description : {rData.description}</Text>
            <Text> forksCount : {rData.forksCount}</Text>
            <Text> language : {rData.language}</Text>
            <Text> ratingAverage : {rData.ratingAverage}</Text>
            <Text> reviewCount : {rData.reviewCount}</Text>
            <Text> stargazersCount : {rData.stargazersCount}</Text>
            
        </View>
        
    )
}
export default RepositoryItem