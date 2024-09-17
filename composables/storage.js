export const useInfoActive = () => useState("use_info_active", () => "Vechicles");
export const useCarActive = () => useState("use_car_active", () => 1);
export const useVechicles = () => useState("use_vechicles", () => []);
export const useVin = () => useState("use_vin", () => '');
export const usepageActive = () => useState("use_page_active", () => 1);
export const usepage = () => useState("use_page", () => 1);
export const useCount = () => useState("use_count", () => 1);
export const useCountTotal = () => useState("use_count_total", () => 1);

export const useHeaderActive = () => useState("use_header_active", () => false);