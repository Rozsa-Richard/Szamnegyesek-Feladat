namespace SecondTask
{
    public partial class MainPage : ContentPage
    {
        public int[] arr = new int[] { 0,0,0,0,0,0,0,0,0 };
        public MainPage()
        {
            InitializeComponent();
            Refresh();
        }
        public void Refresh()
        {
            box0.Text = arr[0].ToString();
            box1.Text = arr[1].ToString();
            box2.Text = arr[2].ToString();

            box3.Text = arr[3].ToString();
            box4.Text = arr[4].ToString();
            box5.Text = arr[5].ToString();

            box6.Text = arr[6].ToString();
            box7.Text = arr[7].ToString();
            box8.Text = arr[8].ToString();
        }

        private void ClearBtn(object sender, EventArgs e)
        {
            for (int i = 0; i < arr.Length; i++)
                arr[i] = 0;
            Refresh();
        }

        private void BtnA(object sender, EventArgs e)
        {
            arr[0] = arr[0] + 1 ;
            arr[1] = arr[1] + 1 ;
            arr[3] = arr[3] + 1 ;
            arr[4] = arr[4] + 1 ;
            Refresh();
        }
        private void BtnB(object sender, EventArgs e)
        {
            arr[2] = arr[2] + 1;
            arr[1] = arr[1] + 1;
            arr[5] = arr[5] + 1;
            arr[4] = arr[4] + 1;
            Refresh();
        }
        private void BtnC(object sender, EventArgs e)
        {
            arr[6] = arr[6] + 1;
            arr[7] = arr[7] + 1;
            arr[3] = arr[3] + 1;
            arr[4] = arr[4] + 1;
            Refresh();
        }
        private void BtnD(object sender, EventArgs e)
        {
            arr[8] = arr[8] + 1;
            arr[7] = arr[7] + 1;
            arr[5] = arr[5] + 1;
            arr[4] = arr[4] + 1;
            Refresh();
        }
    }
}
