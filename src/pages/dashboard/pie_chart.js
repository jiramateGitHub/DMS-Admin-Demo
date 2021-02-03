import { Pie } from '../../utils/base_charts'
import { reactiveProp } from '../../mixins'
export default {
    extends: Pie,
    mixins: [reactiveProp],
    data: () => ({
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }),
    mounted() {
        this.renderChart(this.chartdata, this.options, {
            responsive: true,
            maintainAspectRatio: false,
            pieceLabel: {
                mode: "percentage",
                precision: 1,
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return (
                            data["labels"][tooltipItem["index"]] +
                            ": " +
                            data["datasets"][0]["data"][tooltipItem["index"]] +
                            " ชุดข้อมูล"
                        );
                    },
                },
            },
        })
    }
}