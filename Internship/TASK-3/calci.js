
        let display = document.querySelector("input");
        let buttons = document.querySelectorAll("button");

        function add(val) {
            display.value += val;
        }

        function clearDisplay() {
            display.value = "";
        }

        function deleteOne() {
            display.value = display.value.slice(0, -1);
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        }
    