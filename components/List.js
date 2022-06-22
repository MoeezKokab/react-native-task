import { ScrollView } from 'react-native';
import Card from './Card'

const List = () => {
    return (
        <ScrollView>
            <Card t1="You have recived $200" t2="Thu Dec 11,2021 2:53" t3={200} />
            <Card t1="$150 has been paid" t2="Thu Dec 11,2021 2:53" t3={-150} />
            <Card t1="$180 has been refunded" t2="Thu Dec 1,2021 2:53" t3={-180} />
            <Card t1="you send a gift of $160" t2="Thu Dec 12,2021 2:53" t3={-160} />
        </ScrollView>
    )
}
export default List 