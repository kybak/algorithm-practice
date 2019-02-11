package main

func rotateImage(a [][]int) [][]int {
	l := len(a[0])

	// Zeroed matrix
	t := make([][]int, l)
	for i := range t {
		t[i] = make([]int, l)
	}

	p := l - 1 // col index

	for r := range a {
		for c := range a[r] {
			t[c][p] = a[r][c]
		}

		p--
	}

	return t
}

func main() {
	img := [][]int{
		{1, 2, 3, 4},
		{5, 6, 7, 8},
		{9, 10, 11, 12},
		{13, 14, 15, 16},
	}

	rotateImage(img)
}
