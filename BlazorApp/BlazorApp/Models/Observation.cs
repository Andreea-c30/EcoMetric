namespace BlazorApp.Models
{
    public class Observation
    {
        public string Title { get; set; } = "";
        public string Description { get; set; } = "";
        public string ResearcherType { get; set; } = "";
        public string PhenologicalPhase { get; set; } = "";
        public string Species { get; set; } = "";
        public string Location { get; set; } = "";
        public string Notes { get; set; } = "";
        public List<string> PhotoUrls { get; set; } = new();
        public string Comments { get; set; } = "";
        public double Temperature { get; set; }
        public double Humidity { get; set; }
        public string Weather { get; set; } = "";
        public string AdditionalDetails { get; set; } = "";
        public List<MicroObservation> MicroObservations { get; set; } = new();
    }

    public class MicroObservation
    {
        public Animal Animal { get; set; } = new();
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public DateTime Timestamp { get; set; }
        public string Comments { get; set; } = "";
        public string PhotoUrl { get; set; } = "";
    }

    public class Animal
    {
        public string Name { get; set; } = "";
        public string ScientificName { get; set; } = "";
        public string Description { get; set; } = "";
        public string Category { get; set; } = "";
        public string Notes { get; set; } = "";
    }
}
