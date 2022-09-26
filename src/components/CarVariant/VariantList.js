import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Image, StyleSheet, useWindowDimensions, View} from 'react-native';
import {VariantCard} from "./index";

function VariantList({variants}) {
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

    return (
        <View style={styles.variantListWrapper}>
            <Image source={variants[selectedIndex].image} style={styles.variantListImage}/>
            <FlatList
                ref={flatList}
                data={variants}
                renderItem={({item, index}) => (
                    <VariantCard
                        variant={item}
                        active={index === selectedIndex}
                        lastItem={index === variants.length - 1}
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
    variantListWrapper: {marginBottom: 20},
    variantListImage: {resizeMode: 'contain', width: '100%', height: 200, marginBottom: 20},
});

export default VariantList;