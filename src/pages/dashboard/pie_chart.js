import { Pie } from '../../utils/base_charts'
import { mapGetters } from "vuex";
export default {
    extends: Pie,
    created() {},
    mounted() {
        let value = [];
        value[0] = this.countDmsMetadataByBc[0] + this.countDmsMetadataByBc[1]
        value[1] = this.countDmsMetadataByBc[2] + this.countDmsMetadataByBc[3]
        value[2] = this.countDmsMetadataByBc[4] + this.countDmsMetadataByBc[5]
        value[3] = this.countDmsMetadataByBc[6] + this.countDmsMetadataByBc[7]
        this.renderChart({
            labels: ['ข้อมูลส่วนบุคคล', 'ข้อมูลความลับทางราชการ', 'ข้อมูลความมั่นคง', 'ข้อมูลสาธารณะ'],
            datasets: [{
                backgroundColor: [
                    '#4535AA',
                    '#D6D1F5',
                    '#ED639E',
                    '#B05CBA'
                ],
                data: [value[0], value[1], value[2], value[3]]
            }]
        }, { responsive: true, maintainAspectRatio: false })
    },
    computed: {
        ...mapGetters({
            countDmsMetadataByBc: "metadata_management/countDmsMetadataByBc",
        }),
    },
}