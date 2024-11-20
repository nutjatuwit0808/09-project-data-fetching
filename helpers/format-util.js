export function transformEventsDataFromFirebase(firebaseData) {
    let transformedData = Object.keys(firebaseData).map((key) => {
      return {
        date: firebaseData[key].date,
        description: firebaseData[key].description,
        location: firebaseData[key].location,
        title: firebaseData[key].title,
        image: firebaseData[key].image,
        isFeatured: firebaseData[key].isFeatured,
        id: firebaseData[key].id,
      };
    });

    return transformedData;
  }