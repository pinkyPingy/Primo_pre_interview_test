export default function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    // given
    //  collection_1, collection_2 already sorted from min(0) to max
    //  collection_3  already sorted from max to min(0)
    let i = 0;
    let j = 0;
    let k = collection_3.length - 1;

    const col1 = collection_1.length;
    const col2 = collection_2.length;

    let ans: number[] = [];

    while (i < col1 && j < col2 && k >= 0) {
        let m = Math.min(Math.min(collection_1[i], collection_2[j]), collection_3[k]);
        ans.push(m);
        if (m == collection_1[i]) i++;
        else if (m == collection_2[j]) j++;
        else k--;
    }

    // col1 is out
    while (j < col2 && k >= 0) {
        if (collection_2[j] <= collection_3[k]) {
            ans.push(collection_2[j]);
            j++;
        } else {
            ans.push(collection_3[k]);
            k--;
        }
    }

    // col2 is out
    while (i < col1 && k >= 0) {
        if (collection_1[i] <= collection_3[k]) {
            ans.push(collection_1[i]);
            i++;
        } else {
            ans.push(collection_3[k]);
            k--;
        }
    }

    // col3 is out
    while (i < col1 && j < col2) {
        if (collection_1[i] <= collection_2[j]) {
            ans.push(collection_1[i]);
            i++;
        } else {
            ans.push(collection_2[j]);
            j++;
        }
    }

    // col1, col2 is out
    while (k >= 0) {
        ans.push(collection_3[k]);
        k--;
    }

    // col1, col3 is out
    while (j < col2) {
        ans.push(collection_2[j]);
        j++;
    }

    // col2, col3 is out
    while (i < col1) {
        ans.push(collection_1[i]);
        i++;
    }

    return ans;
}