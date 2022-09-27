import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Image, StyleSheet, useWindowDimensions, View} from 'react-native';
import CardItem from "./CardItem";
import {Video} from "expo-av";

function CarouselCard({items}) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const flatList = useRef();
    const viewConfig = useRef({itemVisiblePercentThreshold: 70})
    const onViewChanged = useRef(({viewableItems}) => {
        if (viewableItems.length > 0) {
            setSelectedIndex(viewableItems[0].index);
        }
    })

    const width = useWindowDimensions().width;

    useEffect(() => {
        if (selectedIndex === undefined || !flatList) {
            return;
        }
        flatList.current.scrollToIndex({index: selectedIndex})

    }, [selectedIndex])

    const getFeature = (featured) => {
        if (featured === null || featured === undefined) {
            return null;
        }

        return featured.type === 'video' ? <Video
            source={featured.source}
            shouldPlay={true}
            resizeMode="contain"
            style={styles.video}
            isLooping={true}
        /> : <Image style={styles.image} source={featured.source}/>;
    }

    return (
        <View style={styles.container}>
            {getFeature(items[selectedIndex].featured || null)}
            <FlatList
                ref={flatList}
                data={items}
                renderItem={({item, index}) => (
                    <CardItem
                        item={item}
                        active={index === selectedIndex}
                        lastItem={index === items.length - 1}
                        onPress={() => setSelectedIndex(index)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width - 80}
                snapToAlignment={"center"}
                decelerationRate={"fast"}
                viewabilityConfig={viewConfig.current}
                onViewableItemsChanged={onViewChanged.current}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {marginBottom: 20},
    video: {width: '100%', height: 230},
    image: {resizeMode: 'contain', width: '100%', height: 200, marginBottom: 20},
});

export default CarouselCard;