#include <iostream>

// Fungsi binary search
int binary_search(int arr[], int size, int target) {
    int left = 0;
    int right = size - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

int main() {
    int data_array[] = {19, 40, 10, 90, 2, 50, 60, 50, 1};
    int array_size = sizeof(data_array) / sizeof(data_array[0]);

    int test_cases[] = {1, 50, 100};

    for (int i = 0; i < sizeof(test_cases) / sizeof(test_cases[0]); i++) {
        int target = test_cases[i];
        int result = binary_search(data_array, array_size, target);

        std::cout << "Input : " << target << std::endl;
        if (result != -1) {
            std::cout << "Output: Angka " << target << " ada di indeks ke " << result << std::endl;
        } else {
            std::cout << "Output: Angka " << target << " tidak ada dalam array" << std::endl;
        }
    }

    return 0;
}
